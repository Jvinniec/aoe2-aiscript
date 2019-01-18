/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { 
    workspace, 
    ExtensionContext, 
    languages, 
    TextDocument, 
    Position,
    CancellationToken,
    CompletionContext,
    CompletionItem,
	MarkdownString,
	LanguageConfiguration
} from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
	CompletionItemKind
} from 'vscode-languageclient';

// Get commands
import * as aoe2commands  from './resources/aoe2AiCommands.json';
import * as aoe2buildings from './resources/aoe2BuildingID.json';
import * as aoe2civs      from './resources/aoe2CivID.json';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	// The server is implemented in node
	let serverModule = context.asAbsolutePath(
		path.join('languageExtension', 'out', 'server.js')
	);
	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'aiscript' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'aoe2AiScript',
		'Aoe2 AiScript Client',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
    client.start();
	
	let langConf: LanguageConfiguration = {
		"wordPattern": /(([a-zA-Z0-9]+-){0,}[a-zA-Z0-9]+)/g
	}
	languages.setLanguageConfiguration('aiscript', langConf);
	
	if (workspace.getConfiguration("aoe2_AiScript").get("enableExperimental")) {
		// Register command completions
		let provider1 = getCompletionsForCommands();
		let provider2 = getCompletionsForBuilding();
		let provider3 = getCompletionsForCivs();

		/* Additional completions still to be implemented
		let provider3 = getCompletionsForUnit();
		let provider4 = getCompletionsForTech();
		let provider5 = getCompletionsForStrategicNumbers();
		*/
		context.subscriptions.push(provider1, provider2);
	}	
}

// Defines completion items for commands
function getCompletionsForCommands() {

	let provider = languages.registerCompletionItemProvider('aiscript', {
        provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext) {
			let items = [];
			aoe2commands.aic.forEach(element => {
				const commandCompletion = new CompletionItem(element.name);
				if (element.section == "Action") {
					commandCompletion.kind = CompletionItemKind.Function;
				} else if (element.section == "Fact") {
					commandCompletion.kind = CompletionItemKind.Method;
				} else {
					commandCompletion.kind = CompletionItemKind.Interface;
				}
				commandCompletion.insertText = element.name;
				
				let text = element.description;
				
				// Add parameters to the infobox
				/*
				if (element.param.length > 0) {
					text += "Parameters:\n";
					element.param.forEach(par => {
						let parname = "";
						if (par.name != undefined) {
							parname = par.name;
						} else if (par.op != undefined) {
							parname = "op."+par.op;
						}
						text += " - " + par.name + " : " + par.description;
					});
				}
				*/

				// Add an example to the infobox
				text += getExampleText(element.example);

				commandCompletion.documentation = new MarkdownString(text);
				items.push(commandCompletion);
			});

            return items;
        }
	});
	
	return provider;
}


// Defines completion items for buildings
function getCompletionsForBuilding() {

	let provider = languages.registerCompletionItemProvider('aiscript', {
        provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext) {
			let items = [];
			aoe2buildings.building.forEach(element => {
				const commandCompletion = new CompletionItem(element.name);
				commandCompletion.kind = CompletionItemKind.Constant;
				//commandCompletion.insertText = element.name;
				
				let text = element.description;
				
				// Add requirements to the infobox
				text += getRequiresText(element.requires);

				commandCompletion.documentation = new MarkdownString(text);
				items.push(commandCompletion);
			});

            return items;
        }
	});
	
	return provider;
}

// Defines completion items for buildings
function getCompletionsForCivs() {

	let provider = languages.registerCompletionItemProvider('aiscript', {
        provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext) {
			let items = [];
			aoe2civs.civ.forEach(element => {
				const commandCompletion1 = new CompletionItem(element.name);
				commandCompletion1.kind = CompletionItemKind.Property;
				commandCompletion1.insertText = element.name;
				
				// Construct the unique text of the civilization
				let text = element.name.toUpperCase() + " civilization.";
				
				// Add unique unit & tech information
				text += "\n\n### Unique:";
				text += "\n- **Unit(s):** " + getRequiresFormattedList(element.unique.unit);
				text += "\n- **Techs:** "   + getRequiresFormattedList(element.unique.tech);
				text += "\n- **Buildings:** " + getRequiresFormattedList(element.unique.building);
				commandCompletion1.documentation = new MarkdownString(text);

				const commandCompletion2 = new CompletionItem(element.name.toUpperCase()+"-CIV");
				commandCompletion2.kind = CompletionItemKind.Property;
				commandCompletion2.documentation = new MarkdownString(text);
				//commandCompletion2.insertText = element.name;

				items.push(commandCompletion1, commandCompletion2);
			});

            return items;
        }
	});
	
	return provider;
}

function getExampleText(example: Array<{title: string, data: string}>) {
	let exText = "";
	if (example.length > 0) {
		// Replace '>', '<'
		let elementData = example[0].data;
		elementData = elementData.split('&lt;').join('<');
		elementData = elementData.split('&gt;').join('>');

		exText = "\n\n### Example\n" + example[0].title + "\n" +
				 "```\n" + elementData + "\n```";
	}
	return exText;
}

interface AiScriptRequires {
	age: string;
	building: Array<string>;
	civ: Array<string>;
	tech: Array<string>;
}

function getRequiresText(requires: AiScriptRequires) {
	let reqText = "\n\n### Requires:";
	// Age
	reqText += "\n- **Age:** " + requires.age;
	reqText += "\n- **Building:** " + getRequiresFormattedList(requires.building);
	reqText += "\n- **Techs:** " + getRequiresFormattedList(requires.tech);
	reqText += "\n- **Civ:** " + getRequiresFormattedList(requires.civ);

	return reqText;
}

function getRequiresFormattedList(reqList: Array<string>) {
	let text = "";
	reqList.forEach(req => {
		// Add commas for additional items in the list
		if (req != reqList[0]) {
			text += ", ";
		}

		// Requirement is 'none' or 'all'
		if ((req === "none") || (req === "all")) {
			text += "*" + req + "*";
		} 
		// A '!' signifies the requirement is to NOT have this item
		else if (req[0] === "!") {
			text += "~~" + req.slice(1,) + "~~";
		} 
		// Otherwise add the item as is
		else {
			text += req;
		}
	});
	return text;
}


export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
