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
	MarkupKind,
	SignatureHelp
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

connection.onInitialize((params: InitializeParams) => {
	let capabilities = params.capabilities;

	// Fill the list of completion items
	fillCompletions();
	connection.console.log("Num pars: " + aiScriptPars.length);
	connection.console.log("Completios pars: " + aiScriptCompletionList.items.length);

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
			}
			/*
			// Tell the client we support hover text
			hoverProvider: false,
			signatureHelpProvider: {
				triggerCharacters: [' ', ' ']
			}
			*/
		}
	};
});

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

// The example settings
interface AiScriptSettings {
	//maxNumberOfProblems: number;
	//showExampleCode: boolean;
	updateErrorsWhen: string;
	enableExperimental: boolean;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: AiScriptSettings = { 
	//maxNumberOfProblems: 1000,
	//showExampleCode: true,
	updateErrorsWhen: "onSave",
	enableExperimental: false
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
	(_textDocumentPosition: TextDocumentPositionParams): CompletionList => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. We ignore this info and always
		// provide the same list of completion items.
		return aiScriptCompletionList;
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'TypeScript details';
			item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);

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


// The following provides parameter information when typing an action or fact
connection.onSignatureHelp(
	(textDocPos: TextDocumentPositionParams): SignatureHelp => {
		// Description
		let sigHelp = "**Line:** " + textDocPos.position.line +"\n"
					  "**Char:** " + textDocPos.position.character;;

		return {
			signatures: [
				{
					label: "signature par1 par2 par3",
					documentation: sigHelp,
					parameters: [
						{label: "par1",
					     documentation: "Parameter 1"},
						{label: "par2"}, 
						{label: "par3"}]
				}],
			activeSignature: 0,
			activeParameter: 0
		}
	}
);
*/
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
	
	// ... otherwise fill completion items
	if ((globalSettings.enableExperimental === false) && (aiScriptCompletionList.items.length === 0)) {
		connection.console.log("Updating completions");
		aiScriptPars.forEach(par => {

			let docText = par.description;

			let item: CompletionItem = {
				label: par.label,
				documentation: {
					value: docText,
					kind: 'markdown'
				}
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
	else {
		connection.console.log("Failed");
		connection.console.log("blah "+globalSettings.enableExperimental);
	}
}