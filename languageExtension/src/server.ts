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
	ParameterInformation,
	MarkupContent
} from 'vscode-languageserver';

// Import the needed methods and objects
import {
	AiScriptPar,
	AiScriptType,
	loadAoE2Parameters
} from './aiScriptResources';

import {AiScriptParser} from './aiScriptParser';
import {AiScriptErr}    from './aiScriptErrorChecker'

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();

let hasConfigurationCapability: boolean                = false;
let hasWorkspaceFolderCapability: boolean              = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

// List of parameters
let aiScriptTypes: Map<string, AiScriptType> = loadAoE2Parameters();
let aiScriptCompletionList: CompletionList = {items: [], isIncomplete: false};


/**********************************************************************//**
 * Initialize the server connection
 * 	@param params 			Parameters for initialization
 **************************************************************************/
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
			hoverProvider: true,

			// Tell client we support signature help
			signatureHelpProvider: {triggerCharacters: [' ']}
		}
	};
});


/**********************************************************************//**
 * Register some things after initializing server connection
 **************************************************************************/
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


/**********************************************************************//**
 * The scripting settings
 **************************************************************************/
interface AiScriptSettings {
	updateErrorsWhen: 	  string;		// Specifies when to update Errors
	maxErrorsReported: 	  number;		// Maximum number of errors to report
	enableCompletionHelp: boolean;		// Turns on/off completion suggestions
	enableHoverHelp:      boolean;		// Turns on/off hover help
	enableParameterHelp:  string;		// Turns on/off signature help
}

/**********************************************************************//**
 * The global settings, used when the `workspace/configuration` request is 
 * not supported by the client.
 **************************************************************************/
const defaultSettings: AiScriptSettings = { 
	updateErrorsWhen: 	  "never",
	maxErrorsReported:    100,
	enableCompletionHelp: false,
	enableHoverHelp:      false,
	enableParameterHelp:  "off"
};
let globalSettings: AiScriptSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<AiScriptSettings>> = new Map();


/**********************************************************************//**
 * Update configuration parameters when user changes them
 * 	@param change			New configuration settings
 **************************************************************************/
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


/**********************************************************************//**
 * Return the current document settings. Also caches them for future reference.
 * 	@param resource			URI of the document in question
 **************************************************************************/
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


/**********************************************************************//**
 * Deletes cached settings when a document is closed
 * 	@param e				TextDocumentChangeEvent 
 **************************************************************************/
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});


/**********************************************************************//**
 * The content of a text document has changed. This event is emitted
 * when the text document first opened or when its content has changed.
 * 	@param change			TextDocumentChangeEvent 
 **************************************************************************/
documents.onDidChangeContent(change => {
	// Check that we want to update 'onChange'
	validateTextDocumentOnChange(change.document);
});


/**********************************************************************//**
 * Re-evaluate a document for errors if the user has specified 
 * 'updateErrorsWhen === "onChnage".
 * 	@param textDocument		Document to be re-evaluated 
 **************************************************************************/
async function validateTextDocumentOnChange(textDocument: TextDocument): Promise<void> {
	let settings = await getDocumentSettings(textDocument.uri);
	if (settings.updateErrorsWhen === "onChange") {
		validateTextDocument(textDocument);
	}
}


/**********************************************************************//**
 * When a file is saved, re-evaluate the document for errors
 * 	@param change			TextDocumentChangeEvent 
 **************************************************************************/
documents.onDidSave(change => {
	validateTextDocumentOnSave(change.document);
});


/**********************************************************************//**
 * Re-evaluate a document for errors if the user has specified 
 * 'updateErrorsWhen === "onChnage".
 * 	@param textDocument		Document to be re-evaluated 
 **************************************************************************/
async function validateTextDocumentOnSave(textDocument: TextDocument): Promise<void> {
	let settings = await getDocumentSettings(textDocument.uri);
	if (settings.updateErrorsWhen === "onSave") {
		validateTextDocument(textDocument);
	}
}


/**********************************************************************//**
 * When a file is opened, evaluate the document for errors
 * 	@param change			TextDocumentChangeEvent 
 **************************************************************************/
documents.onDidOpen(change => {
	validateTextDocument(change.document);
});


/**********************************************************************//**
 * Evaluates a given text document for errors
 * 	@param textDocument		Document to be evaluated 
 **************************************************************************/
async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// In this simple example we get the settings for every validate run.
	let settings = await getDocumentSettings(textDocument.uri);
	let diagnostics: Diagnostic[] = [];

	// Quit if no checks were actually requested
	//if ((settings.maxErrorsReported === 0) || (settings.updateErrorsWhen === "never")) {
	if (true) {
		return;
	}

	//let loadfile = textDocument.uri.substring(7);
	// Script text
	let text = textDocument.getText();
	
	// Get the errors
	let parser: AiScriptParser = new AiScriptParser("dummyname.per", aiScriptTypes);
	let errors: AiScriptErr[]  = parser.getErrors(text, settings.maxErrorsReported);
	connection.console.log("NumErrs: " + errors.length);

	// Define the diagnostic information
	errors.forEach(error => {
		diagnostics.push({
			severity: error.severity,
			code: error.code,
			range: {
				start: textDocument.positionAt(error.position.start),
				end: textDocument.positionAt(error.position.stop)
			},
			message: "ERR"+error.code+": "+error.message.long,
			source: 'Aoe2AiScript'
		});
	})
	/*

	//let command_pattern: RegExp = /(\(\s*)\w[^\(\)]*(\".*\")*[^\(\)]*(?=\))/g;
	//let m: RegExpExecArray;

	while ((m = command_pattern.exec(text)) && problems < settings.maxErrorsReported) {
		connection.console.log(m.index + ": " + m.join('|'));

		let char = m.index;
		let isComment = false;
		while ((text[char--] !== "\n") && !isComment) {
			if (text[char] === ";")
				isComment = true;
		}
		// Skip comments
		if (isComment) continue;

		// Search for matching command
		let test_str = m[0].slice(m[1].length,);
		//connection.console.log(test_str);
		let offset = m[0].length - test_str.length;

		// Replace strings with a single word, for ease of parsing
		test_str      = test_str.replace(/"[\s\S]*"/g, '"string"');
		let test_arr  = test_str.split(/\s+/g);
		let com_match = aiScriptPars[test_arr[0]];
		
		// Note the match
		let diagnostic: Diagnostic = undefined;
		if (com_match == undefined) {
			// Failure to find a match for the command
			diagnostic = {
				severity: DiagnosticSeverity.Error,
				range: {
					start: textDocument.positionAt(m.index+offset),
					end: textDocument.positionAt(m.index + offset + test_arr[0].length)
				},
				message: 'Unknown command: `'+test_arr[0]+'`',
				source: 'Aoe2AiScript'
			};
			problems++;
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
				source: 'Aoe2AiScript'
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
		}

		if (diagnostic != undefined) {
			diagnostics.push(diagnostic);
		}
		
	}
	*/

	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}


/**********************************************************************//**
 * Registers when a watched file has been changed
 * 	@param change			Parameters related to the watched file change
 **************************************************************************/
connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received a file change event');
});


/**********************************************************************//**
 * Provides the initial list of the completion items.
 * 	@param _textDocumentPosition	Document to be evaluated 
 * 	@returns List of completion items (or [undefined] if completions are turned off)
 **************************************************************************/
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): Promise<CompletionList> => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. We ignore this info and always
		// provide the same list of completion items.
		return getCompletions(_textDocumentPosition);
	}
);


/**********************************************************************//**
 * Returns a list of completion items
 * 	@param textDocument		Document to be evaluated
 * 	@returns List of completion items (or [undefined] if completions are turned off)
 **************************************************************************/
async function getCompletions(_textDocumentPosition: TextDocumentPositionParams): Promise<CompletionList> {
	// Check if completions are turned on
	let settings = await getDocumentSettings(_textDocumentPosition.textDocument.uri);
	if (settings.enableCompletionHelp) {
		return aiScriptCompletionList;
	} else {
		return undefined;
	}
}


/**********************************************************************//**
 * Returns a Hover item based on the current document position
 * 	@param textDocPos		Position in current document (line & char)
 * 	@returns A single Hover item
 **************************************************************************/
connection.onHover(
	(textDocPos: TextDocumentPositionParams): Promise<Hover> => {
		return getHover(textDocPos);
	}
);


/**********************************************************************//**
 * Returns a Hover item based on the current document position
 * 	@param textDocPos		Position in current document (line & char)
 * 	@returns A single Hover item
 * 
 * Based on the current position of the cursor, this method returns a Hover
 * object to be displayed. If the item is not in the list of AoE2 script
 * parameters or HoverHelp is not enabled, an [undefined] is returned 
 * resulting in nothing being displayed.
 **************************************************************************/
async function getHover(textDocPos: TextDocumentPositionParams): Promise<Hover> {
	// Make sure hover text is requested
	let settings = await getDocumentSettings(textDocPos.textDocument.uri);
	if (settings.enableHoverHelp === false) {
		return undefined;
	}

	// Need to get the word that we're hovering over
	let hoverWord = "**Line:** " + textDocPos.position.line +"\n"
					"**Char:** " + textDocPos.position.character;

	// Define the signature to be returned
	let hover: Hover = undefined;

	// Get the document position
	let line = textDocPos.position.line;
	let col  = textDocPos.position.character;

	// Get the range of the current line
	let line_range : Range = {
		start: {line: line, character: 0},
		end:   {line: line, character: 10000}
	};

	// An AiScript command is defined as: (commandName par1 par2 <etc...>)
	// We need to get all of the text back to the nearest '(' and up to the
	// cursor position
	let text: TextDocument = documents.get(textDocPos.textDocument.uri);
	let line_text = text.getText(line_range).trimRight();
	
	// Skip if we're hovering inside a comment
	let comment_regex = /;/g;
	if (comment_regex.test(line_text.substr(0,col))) {
		hover = undefined;
	}

	// ... otherwise get the string
	else {
		// Loop until we have the end of the current command/parameter name.
		// This helps to identify what command or parameter we're looking at
		let word_end = /(\s+|\(|\)|\n|;)$/g;
		while ((!word_end.test(line_text.substr(0,++col))) && (col <= line_text.length)) {

			// If there are a rediculous number of characters, there's a problem
			if (col > 1000) {
				connection.console.error("Command is unreasonably long...");
				return undefined;
			}
		}
		// Update the text
		line_text = line_text.substr(0,col-1);

		// Now get only the text from the closest '(' until the end
		//let word_begin      = /(\s|\()[a-zA-Z0-9-:<>*\/+]+(\s|\)|\n|;)$/g;
		let word_begin      = /(\(|\s|^)[^\(\s]+$/g;
		let hover_txt_array = word_begin.exec(line_text);
		let hover_txt       = "";

		// Handle the case where the object doesn't begin with a '('
		if (hover_txt_array === null) {
			return undefined;
		} else {
			hover_txt = hover_txt_array[0];
			if (/(\(|\s)/g.test(hover_txt))
				hover_txt = hover_txt.substr(1,);
		}

		// Search for command
		let hover_par: AiScriptPar = undefined;
		Object.keys(aiScriptTypes).forEach(typekey => {
			if (hover_par === undefined)
				hover_par = aiScriptTypes[typekey].values[hover_txt];
		});

		if (hover_par !== undefined) {
		
			// Generate the output hover text
			let hover_str = "(" + hover_par.section + ") " + hover_par.label + 
						    "\n\n" + hover_par.description; 

			// Initialize the signature object
			hover = {
				contents: {kind: 'markdown', value: hover_str}
			};
		}
	}
	// Return the signature
	return hover;
}


/**********************************************************************//**
 * Provides parameter information when typing an action or fact
 * 	@param textDocPos		Position of cursor in current document
 * 	@returns List of a single Hover item
 * 
 * Based on the current position of the cursor, this method returns a Hover
 * object to be displayed. If the item is not in the list of AoE2 script
 * parameters or HoverHelp is not enabled, an [undefined] is returned 
 * resulting in nothing being displayed.
 **************************************************************************/
connection.onSignatureHelp(
	(textDocPos: TextDocumentPositionParams): Promise<SignatureHelp> => {
		return getSignatureHelp(textDocPos);
	}
);


/**********************************************************************//**
 * Get the signature help in an asynchronous way
 * 	@param textDocPos		Current line/character of cursor in document
 * 	@returns List of a single Hover item
 * 
 * Based on the current position of the cursor, this method returns a 
 * SignatureHelp object to be displayed. If the item is not in the list of 
 * AoE2 script parameters or HoverHelp is not enabled, an [undefined] is 
 * returned resulting in nothing being displayed.
 **************************************************************************/
async function getSignatureHelp(textDocPos: TextDocumentPositionParams): Promise<SignatureHelp> {
	// Make sure we actually want parameter help
	let settings = await getDocumentSettings(textDocPos.textDocument.uri);
	if (settings.enableParameterHelp === "off") {
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
	
	// Skip if we're in an ignorable situation. This is defined here as
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

		command_text     = command_text.substr(1,);	// trim leading '('
		let command_pars = command_text.split(/\s+/g);
		let command_str  = command_pars[0];			// Command name
		let par_indx     = command_pars.length - 2;	// Parameter index at cursor

		// Search for command in the Fact, Action, and FactAction types
		let command: AiScriptPar = aiScriptTypes["Control"].values[command_str];
		if (command === undefined)
			command = aiScriptTypes["Fact"].values[command_str];
		if (command === undefined)
			command = aiScriptTypes["Action"].values[command_str];
		if (command === undefined)
			command = aiScriptTypes["FactAction"].values[command_str];

		// If the comand was found ...
		if (command !== undefined) {
			// Add the command type to the command definition
			command_str = "(" + command.section + ") " + command_str; 
			
			// Load the parameters with descriptions
			let par_info : ParameterInformation[] = [];
			let offset = command_str.length + 1;
			command.pars.forEach(par => {
				command_str += " " + par.type;
				par_info.push({
					label: [offset, offset+par.type.length],
					documentation: {
						value: "**"+par.type +":** *"+par.note+"*", 
						kind: 'markdown'
					}
				});
				offset += par.type.length+1;				
			});

			let descrip: MarkupContent = {value: "", kind: 'markdown'};
			if (settings.enableParameterHelp === "full") {
				descrip.value = "\n----\n**Command Description**  \n"+command.description;
			}

			// Initialize the signature object
			signature = {
				signatures: [{
					label: command_str,
					documentation: descrip,
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

/**********************************************************************//**
 * Make the text document manager listen on the connection for open, change,
 * and close text document events
 **************************************************************************/
documents.listen(connection);


/**********************************************************************//**
 * Listen on the connection
 **************************************************************************/
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
		
		// Loop through all Types
		Object.keys(aiScriptTypes).forEach(typeName => {
			let type: AiScriptType = aiScriptTypes[typeName];

			// Loop through all parameters of this type
			Object.keys(type.values).forEach(parName => {
				let par: AiScriptPar = type.values[parName];
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
					case "BuildingClass":
					case "WallId":
					case "WallLine":
						item.kind = CompletionItemKind.Struct;
						break;
					case "UnitId":
					case "UnitClass":
					case "UnitLine":
					case "UnitSet":
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
					case "RelOp":
					case "UpRelOp":
					case "TypeOp":
					case "MathOp":
						item.kind = CompletionItemKind.Operator;
						break;
					case "Control":
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
		});
	} // end-if
}