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
	TextDocumentPositionParams,
	Hover
} from 'vscode-languageserver';

import {
	MarkdownString 
} from 'vscode';

import * as aoe2commands from './resources/aoe2AiCommands.json';
import * as aoe2buildings from './resources/aoe2BuildingID.json';

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
	let capabilities = params.capabilities;

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
			hoverProvider: false
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
	maxNumberOfProblems: number;
	showExampleCode: boolean;
	updateErrorsWhen: string;
	enableExperimental: boolean;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: AiScriptSettings = { 
	maxNumberOfProblems: 1000,
	showExampleCode: true,
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
	while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
		problems++;

		// Search for matching command
		let test_str = m[0].slice(1,).replace(/\s*/g,'');
		let offset = m[0].length - test_str.length;
		let com_match = "";
		aoe2commands.aic.forEach(el => {
			if (el.name === test_str) {
				//connection.console.log(el.name);
				com_match = el.description;
				
				if (settings.showExampleCode) {
					com_match += "\nexample:\n```"+el.example[0].data+"```";
				}
				return true;
			}
		});

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
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		return [
			{
				label: 'TypeScript',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'JavaScript',
				kind: CompletionItemKind.Text,
				data: 2
			}
		];
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			(item.detail = 'TypeScript details'),
				(item.documentation = 'TypeScript documentation');
		} else if (item.data === 2) {
			(item.detail = 'JavaScript details'),
				(item.documentation = 'JavaScript documentation');
		}
		return item;
	}
);

connection.onHover(
	(_textDocumentPosition: TextDocumentPositionParams): Hover => {
		return {
			contents: {
				language: "aiscript",
				value: "### HOVER!"
			}
		}
	}
);

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
