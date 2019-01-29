// AoE2 Ai Scripting resources
import * as aoe2actions    from './resources/aoe2AiAction.json';
import * as aoe2buildings  from './resources/aoe2BuildingId.json';
import * as aoe2civs       from './resources/aoe2CivId.json';
import * as aoe2factaction from './resources/aoe2AiFactAction.json';
import * as aoe2facts      from './resources/aoe2AiFact.json';
import * as aoe2misc	   from './resources/aoe2Misc.json';
import * as aoe2techs      from './resources/aoe2TechId.json';
import * as aoe2units      from './resources/aoe2UnitId.json';

// Methods and variables to export from this file
export {AiScriptPar, loadAoE2Parameters};

interface AiScriptRequires {
	age: string;
	building: Array<string>;
	civ: Array<string>;
	tech: Array<string>;
}

interface AiScriptUniques {
    building: Array<string>;
    tech: Array<string>;
    unit: Array<string>;
}

interface AiScriptPar {

	// Basic parameters required by all parameters
	label: string;
	description: string;
	section: string;

	// Optional parameters
	altLabel?: string;
	id?: number;
	notes?: Array<string>;
	pars?: Array<{type: string, note: string}>;
	examples?: Array<{title: string, data: string}>;

	// Required things to build/train/research an object
	requires?: AiScriptRequires;

	// Unique unit/tech/building information for civilizations
	unique?: AiScriptUniques;
}

interface AiScriptCommand {
	name: string;
	description: string;
	section: string;
	note: Array<string>;
	param: Array<{type: string, note: string}>;
	example: Array<{title: string, data: string}>;
}

// Initialize the parameter list
let ai_script_parameters: AiScriptPar[] = [];

function loadAoE2Parameters(): AiScriptPar[] {

    // Fill all the parameters
	loadBuildings();
	loadCommands();
	loadCivs();
	loadMisc();
	loadTechs();
    loadUnits();

    return ai_script_parameters;
}

// Defines command itmes
function loadCommands() {
	aoe2facts.FactId.forEach(element => {
		ai_script_parameters.push(getCommandPar(element));
	});
	aoe2actions.ActionId.forEach(element => {
		ai_script_parameters.push(getCommandPar(element));
	});
	aoe2factaction.FactActionId.forEach(element => {
		ai_script_parameters.push(getCommandPar(element));
	});
}


function getCommandPar(command: AiScriptCommand): AiScriptPar {
	return {
		label:       command.name,
        description: command.description + 
                     getParamText(command.param) + 
                     getExampleText(command.example),
        section:     command.section,
        pars:        command.param,
        examples:    command.example
	}
}

// Defines completion items for buildings
function loadBuildings() {
	aoe2buildings.building.forEach(building => {
		ai_script_parameters.push( {
			label:       building.name,
			description: building.description + getRequiresText(building.requires),
            section:     "BuildingId",
            requires:    building.requires
		});
	});
}

// Defines completion items for buildings
function loadCivs() {

	aoe2civs.CivId.forEach(civ => {
		ai_script_parameters.push( {
			label:       civ.name,
			altLabel:    civ.name.toUpperCase() + "-CIV",
			description: civ.name.toUpperCase() + " civilization" + getUniquesText(civ.unique),
			section:     "CivId",
			unique:      civ.unique
		});
	});
/*
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
*/
}

// Load the miscellaneous objects
function loadMisc() {

	// Loop over all keys and all items in each key
	Object.keys(aoe2misc).forEach(misc => {
		aoe2misc[misc].forEach(item => {
			ai_script_parameters.push( {
				label:       item.name,
				description: item.description,
				section:     misc,
				id:          item.id
			});
		});
	});

}


// Defines units
function loadUnits() {

	aoe2units.UnitId.forEach(unit => {
		ai_script_parameters.push( {
			label:       unit.name,
            description: unit.description + 
                         "\n\nWildcard line: " + unit.wildcard_line + 
                         getRequiresText(unit.requires),
			section:     "UnitId",
			requires:    unit.requires
		});
	});
/*
				const commandCompletion = new CompletionItem(element.name);
				commandCompletion.kind = CompletionItemKind.Unit;
				commandCompletion.insertText = element.name;
				
				// Construct the unique text of the civilization
				let text = element.description;
				text    += "\n\nWildcard line: ";
				if ((element.wildcard_line === "none") || (element.wildcard_line === "all")) {
					text += "*" + element.wildcard_line + "*";	
				} else {
					text += element.wildcard_line;
				}
				text += getRequiresText(element.requires);

				// Construct the "See also" text

				commandCompletion.documentation = new MarkdownString(text);
*/
}


function loadTechs() {

	aoe2techs.TechID.forEach(tech => {
		ai_script_parameters.push( {
			label:       tech.name,
			description: tech.description,
			section:     "TechId",
			requires:    tech.requires
		});
	});
/*				
				const commandCompletion = new CompletionItem(element.name);
				commandCompletion.kind = CompletionItemKind.Unit;
				commandCompletion.insertText = element.name;
				
				// Construct the unique text of the civilization
				let text = element.description;
				text += getRequiresText(element.requires);

				// Construct the "See also" text

				commandCompletion.documentation = new MarkdownString(text);
*/
}

function getParamText(params: Array<{type: string, note: string}>) {
	let parText = "\n\n### Parameters\n";
	params.forEach(par => {
		if (par.type === "none") {
			parText += "*none*";
		} else {
			parText += "* **" + par.type + "**: " + par.note;
		}
		parText += "\n";
	});

	return parText;
}

function getExampleText(example: Array<{title: string, data: string}>) {
	let exText = "";
	if (example.length > 0) {
		// Replace '>', '<'
		let elementData = example[0].data;
		elementData = elementData.split('&lt;').join('<');
		elementData = elementData.split('&gt;').join('>');
		elementData = elementData.split('&quot;').join('"');

		exText = "\n\n### Example\n" + example[0].title;
		if (example[0].title !== "none") {
			exText += "\n" + "```\n" + elementData + "\n```";
		}
	}
	return exText;
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

function getUniquesText(uniqList: AiScriptUniques) {
    let text = "\n\n### Uniques";
    text += "\n* **Units**: " + getRequiresFormattedList(uniqList.unit);
    text += "\n* **Techs**: " + getRequiresFormattedList(uniqList.tech);
    if (uniqList.building[0] !== "none") {
        text += "\n**Buildings**: " + getRequiresFormattedList(uniqList.building);
    }
    return text;
}