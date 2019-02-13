/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
	createConnection,
	TextDocuments,
	TextDocument,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	CompletionList,
	TextDocumentPositionParams,
	Hover,
	Range,
	SignatureHelp,
	ParameterInformation
} from 'vscode-languageserver';

// Import the needed methods and objects
import {
	AiScriptPar,
	loadAoE2Parameters
} from './aiScriptResources';

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

// List of parameters
let aiScriptPars: AiScriptPar[] = loadAoE2Parameters();
let aiScriptCompletionList: CompletionList = {items: [], isIncomplete: false};


// Initialize the server connection
connection.onInitialize((params: InitializeParams) => {
	let capabilities = params.capabilities;

	// Fill the list of completion items
	fillCompletions();

	// Does the client support the `workspace/configuration` request?
	// If not, we will fall back using global settings
	hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
	hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
	hasDiagnosticRelatedInformationCapability =
		!!(capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation);


	return {
		capabilities: {
			textDocumentSync: documents.syncKind,
			// Tell the client that the server supports code completion
			completionProvider: {
				resolveProvider: false
			},
			
			// Tell the client we support hover text
			hoverProvider: false,

			// Tell client we support signature help
			signatureHelpProvider: {triggerCharacters: [' ']}
		}
	};
});

// Register some things after initializing server connection
connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(
			DidChangeConfigurationNotification.type,
			undefined
		);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The scripting settings settings
interface AiScriptSettings {
	//maxNumberOfProblems: number;
	//showExampleCode: boolean;
	updateErrorsWhen: string;
	enableCompletionHelp: boolean;
	enableParameterHelp: boolean;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: AiScriptSettings = { 
	//maxNumberOfProblems: 1000,
	//showExampleCode: true,
	updateErrorsWhen: "onSave",
	enableCompletionHelp: false,
	enableParameterHelp: false
};
let globalSettings: AiScriptSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<AiScriptSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
		connection.console.log("Registered config change");
	} else {
		globalSettings = <AiScriptSettings>(
			(change.settings.aoe2_AiScript || defaultSettings)
		);
	}
	// Re-generate the list of completions
	fillCompletions();

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});


// Return the current document settings
function getDocumentSettings(resource: string): Thenable<AiScriptSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'aoe2_AiScript'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	// Check that we want to update 'onChange'
	validateTextDocumentOnChange(change.document);
});

// When a file is saved, update the error squiggles
documents.onDidSave(change => {
	validateTextDocument(change.document);
});

// When a file is opened, update the error squiggles
documents.onDidOpen(change => {
	validateTextDocument(change.document);
});


// Update textdocument on change if requested
async function validateTextDocumentOnChange(textDocument: TextDocument): Promise<void> {
	let settings = await getDocumentSettings(textDocument.uri);
	if (settings.updateErrorsWhen === "onChange") {
		validateTextDocument(textDocument);
	}
}


async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// In this simple example we get the settings for every validate run.
	let settings = await getDocumentSettings(textDocument.uri);
	let diagnostics: Diagnostic[] = [];

	/* Skip if experimental features are not requested */
	if (true) {
		connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
		return;
	}

	// The validator creates diagnostics for all uppercase words length 2 and more
	let text = textDocument.getText();
	let pattern = /\(\s*(\w+-?)+/g;
	let m: RegExpExecArray | null;

	let problems = 0;
	while ((m = pattern.exec(text)) && problems < 0/*settings.maxNumberOfProblems*/) {
		problems++;

		// Search for matching command
		let test_str = m[0].slice(1,).replace(/\s*/g,'');
		let offset = m[0].length - test_str.length;
		let com_match = "";
		/*
		aiScriptPars.forEach(el => {
			if (el.name === test_str) {
				//connection.console.log(el.name);
				com_match = el.description;
				
				com_match += "\nexample:\n```"+el.example[0].data+"```";
				return true;
			}
		});
		*/
		// Note the match
		if (com_match.length > 0) {
			let hover: Hover = {
				contents: {
					language: "markdown",
					value: `${test_str}\n${com_match}`
				}
			}
			
		}
		// ... otherwise if no command is found, produce an error
		else {
			let diagnosic: Diagnostic = {
				severity: DiagnosticSeverity.Warning,
				range: {
					start: textDocument.positionAt(m.index+offset),
					end: textDocument.positionAt(m.index + m[0].length)
				},
				message: `${test_str}\n${com_match}`,
				source: 'AiScript'
			};
			if (hasDiagnosticRelatedInformationCapability) {
				diagnosic.relatedInformation = [
					{
						location: {
							uri: textDocument.uri,
							range: Object.assign({}, diagnosic.range)
						},
						message: 'Spelling matters'
					},
					{
						location: {
							uri: textDocument.uri,
							range: Object.assign({}, diagnosic.range)
						},
						message: 'Particularly for names'
					}
				];
			}
			diagnostics.push(diagnosic);
		}
	}

	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): Promise<CompletionList> => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. We ignore this info and always
		// provide the same list of completion items.
		let doc: TextDocument = documents.get(_textDocumentPosition.textDocument.uri);
		let complist: Promise<CompletionList> = getCompletions(doc);
		return complist;
	}
);

async function getCompletions(textDocument: TextDocument): Promise<CompletionList> {
	// Check if we're running experimental features
	let settings = await getDocumentSettings(textDocument.uri);
	if (settings.enableCompletionHelp) {
		return aiScriptCompletionList;
	} else {
		return undefined;
	}
}

/*
connection.onHover(
	(_textDocumentPosition: TextDocumentPositionParams): Hover => {
		// Need to get the word that we're hovering over
		let hoverWord = "**Line:** " + _textDocumentPosition.position.line +"\n"
						"**Char:** " + _textDocumentPosition.position.character;

		// Get the line text

		// Split line on known delimiters

		// Find the "command" at this position

		return {
			contents: {
				kind: MarkupKind.Markdown,
				value: hoverWord
			}
		}
	}
);
*/

// The following provides parameter information when typing an action or fact
connection.onSignatureHelp(
	(textDocPos: TextDocumentPositionParams): Promise<SignatureHelp> => {

		return getSignatureHelp(textDocPos);
	}
);


// Get the signature help in an asynchronous way
async function getSignatureHelp(textDocPos: TextDocumentPositionParams): Promise<SignatureHelp> {

	// Make sure we actually want parameter help
	let settings = await getDocumentSettings(textDocPos.textDocument.uri);
	if (settings.enableParameterHelp === false) {
		return undefined;
	}
																
	// Define the signature to be returned
	let signature: SignatureHelp = undefined;

	// Get the document position
	let line = textDocPos.position.line;
	let col  = textDocPos.position.character;

	let line_range : Range = {
		start: {line: line, character: 0},
		end:   {line: line, character: col}
	};

	// An AiScript command is defined as: (commandName par1 par2 <etc...>)
	// We need to get all of the text back to the nearest '(' and up to the
	// cursor position
	let text: TextDocument = documents.get(textDocPos.textDocument.uri);
	let line_text = text.getText(line_range)
	
	// Skip if we're in an ignorable situation. This is defined nere as
	// any situation such as:
	//		'(' : An opening bracket with nothing beyond it
	//		')' : A closing bracket with nothing beyond it
	//		';'   : Identifies that a comment exists somewhere in the string
	// For the cases involving a bracket, we also catch the situation
	// where there is an indeterminate number of spaces after it.
	let ignore_signature_regex = /(\(|\))(\s*)$|;/g;
	if (ignore_signature_regex.test(line_text)) {
		signature = undefined;
	}

	// ... otherwise get the string
	else {
		// Loop until we have the end of the current command/parameter name.
		// This helps to identify what command or parameter we're looking at
		let signature_end = /(\s+|\(|\)|\n|;)$/g;
		while (!signature_end.test(line_text)) {
			line_range.end.character++;

			// If there are a rediculous number of characters, there's a problem
			if (line_range.end.character - col > 1000) {
				connection.console.error("Command is unreasonably long...");
				return undefined;
			}
		
			// Update the text
			line_text = text.getText(line_range);
		}

		// Trim undesired characters from end if they exist
		if (line_text.length > col) {
			line_text = line_text.slice(0, line_text.length-1);
		}

		// Now get only the text from the closest '(' until the end
		let command_text_array = /\([^\(]+$/g.exec(line_text);

		let command_text = "";
		// Handle the case where the object doesn't begin with a '('
		if (command_text_array === null) {
			return undefined;
		} else {
			command_text = command_text_array[0];
		}

		command_text     = command_text.substr(1);	// trim leading '('
		let command_pars = command_text.split(/\s+/g);
		let command_str  = command_pars[0];			// Command name
		let par_indx     = command_pars.length - 2;	// Parameter index at cursor

		// Search for command
		let command: AiScriptPar = undefined;
		aiScriptPars.forEach(par => {
			if (par.label === command_str)
				command = par;
		});

		if ((command !== undefined) &&
			((command.section === "Fact") ||
				(command.section === "Action") ||
				(command.section === "FactAction"))) {
		
			// Add the command type to the command definition
			command_str = "(" + command.section + ") " + command_str; 
			
			// Load the parameters with descriptions
			let par_info : ParameterInformation[] = [];
			command.pars.forEach(par => {
				if (par.type !== "none") {
					command_str += " " + par.type;
					par_info.push({
						label: par.type,
						documentation: {
							value: "**"+par.type +":** *"+par.note+"*\n\n----", 
							kind: 'markdown'
						}
					});
				}
			});

			// Initialize the signature object
			signature = {
				signatures: [{
					label: command_str,
					documentation: {
						value: "**Command Description**  \n"+command.description, 
						kind: 'markdown'
					},
					parameters: par_info
				}],
				activeSignature: 0,
				activeParameter: par_indx
			};
		}
	}
	// Return the signature
	return signature;
};

/*
connection.onDidOpenTextDocument((params) => {
	// A text document got opened in VSCode.
	// params.uri uniquely identifies the document. For documents store on disk this is a file URI.
	// params.text the initial full content of the document.
	connection.console.log(`${params.textDocument.uri} opened.`);
});
connection.onDidChangeTextDocument((params) => {
	// The content of a text document did change in VSCode.
	// params.uri uniquely identifies the document.
	// params.contentChanges describe the content changes to the document.
	connection.console.log(`${params.textDocument.uri} changed: ${JSON.stringify(params.contentChanges)}`);
});
connection.onDidCloseTextDocument((params) => {
	// A text document got closed in VSCode.
	// params.uri uniquely identifies the document.
	connection.console.log(`${params.textDocument.uri} closed.`);
});
*/

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();


/*******************************************************************//**
 * Fill and register the completion objects
 ***********************************************************************/
function fillCompletions() {
	// Delete any stored completions
	while(aiScriptCompletionList.items.length > 0) {
		aiScriptCompletionList.items.pop();
	}
	
	if (aiScriptCompletionList.items.length === 0) {
		
		// Loop through all parameters
		aiScriptPars.forEach(par => {

			// Construct a detailed call signature
			let detail = "(" + par.section + ") " + par.label;
			if (par.pars !== undefined) {
				par.pars.forEach(p => {
					detail += " " + p.type;
				})
			}

			// Define a new completion item
			let item: CompletionItem = {
				label: par.label,
				documentation: {
					value: par.description,
					kind: 'markdown'
				},
				detail: detail
			}

			// Define the parameter kind (determines which icon is next to the 
			// suggestion in the popup list)
			switch (par.section) {
				case "BuildingId":
					item.kind = CompletionItemKind.Struct;
					break;
				case "UnitId":
					item.kind = CompletionItemKind.Unit;
					break;
				case "Action":
				case "FactAction":
					item.kind = CompletionItemKind.Method;
					break;
				case "Fact":
					item.kind = CompletionItemKind.Variable;
					break;
				case "TechId":
					item.kind = CompletionItemKind.Class;
					break;
				case "AgeId":
					item.kind = CompletionItemKind.Enum;
					break;
				case "CompareOp":
				case "TypeOp":
				case "MathOp":
					item.kind = CompletionItemKind.Operator;
					break;
				case "Instruction":
					item.kind = CompletionItemKind.Interface;
					break;
				default:
					item.kind = CompletionItemKind.Module;
					break;
			}

			// Append the new completion item
			aiScriptCompletionList.items.push(item);

			// Add an entry for alternative labels, i.e. for Civs
			if (par.altLabel !== undefined) {
				item.label = par.altLabel;
				aiScriptCompletionList.items.push(item);
			}
		});
	} // end-if
}