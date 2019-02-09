/**********************************************************************//**
 * Import AI scripting resources
 **************************************************************************/
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

/**********************************************************************//**
 * Defines a 'require' object, typically associated with units and techs
 **************************************************************************/
interface AiScriptRequires {
	age: string;
	building: Array<string>;
	civ: Array<string>;
	tech: Array<string>;
}

/**********************************************************************//**
 * Defines a 'unique' object associated with civilizations
 **************************************************************************/
interface AiScriptUniques {
    building: Array<string>;
    tech: Array<string>;
    unit: Array<string>;
}


/**********************************************************************//**
 * Defines a scripting parameter that can be used for completions and hovers
 **************************************************************************/
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


/**********************************************************************//**
 * Defines variables associated with a scripting command (facts and actions)
 **************************************************************************/
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


/**********************************************************************//**
 * Loads all parameters from the resource files
 **************************************************************************/
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


/**********************************************************************//**
 * Loads facts, actions and factactions
 **************************************************************************/
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


/**********************************************************************//**
 * Formats the results from a command object into an AiScriptPar
 **************************************************************************/
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


/**********************************************************************//**
 * Loads BuidingId objects into ai_script_parameters
 **************************************************************************/
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


/**********************************************************************//**
 * Loads CivId objects into ai_script_parameters
 **************************************************************************/
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
}


/**********************************************************************//**
 * Loads Misc resource objects into ai_script_parameters
 **************************************************************************/
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


/**********************************************************************//**
 * Loads UnitId objects into ai_script_parameters
 **************************************************************************/
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
}


/**********************************************************************//**
 * Loads TechId objects into ai_script_parameters
 **************************************************************************/
function loadTechs() {

	aoe2techs.TechID.forEach(tech => {
		ai_script_parameters.push( {
			label:       tech.name,
			description: tech.description + getRequiresText(tech.requires),
			section:     "TechId",
			requires:    tech.requires
		});
	});
}


/**********************************************************************//**
 * Formats the parameters of a command into a markdown string
 *  @param[in] params       Array of {type: string, note: string} objects
 *  @return Markdown formatted text
 **************************************************************************/
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


/**********************************************************************//**
 * Formats the examples of a given parameter into a markdown string
 *  @param[in] example      Array of {title: string, data: string} objects
 *  @return Markdown formatted text
 **************************************************************************/
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


/**********************************************************************//**
 * Formats the 'require' of a given parameter into a markdown string
 *  @param[in] requires     AiScriptRequires compatible object
 *  @return Markdown formatted text
 **************************************************************************/
function getRequiresText(requires: AiScriptRequires) {
	let reqText = "\n\n### Requires:";
	// Age
	reqText += "\n- **Age:** " + requires.age;
	reqText += "\n- **Building:** " + getFormattedList(requires.building);
	reqText += "\n- **Techs:** " + getFormattedList(requires.tech);
	reqText += "\n- **Civ:** " + getFormattedList(requires.civ);

	return reqText;
}


/**********************************************************************//**
 * Formats the 'unique' attributes of a given civilization as a markdown string
 *  @param[in] uniqList     AiScriptUniques compatible object
 *  @return Markdown formatted text
 **************************************************************************/
function getUniquesText(uniqList: AiScriptUniques) {
    let text = "\n\n### Uniques";
    text += "\n* **Units**: " + getFormattedList(uniqList.unit);
    text += "\n* **Techs**: " + getFormattedList(uniqList.tech);
    if (uniqList.building[0] !== "none") {
        text += "\n**Buildings**: " + getFormattedList(uniqList.building);
    }
    return text;
}


/**********************************************************************//**
 * Formats a list of strings based on a set of predetermined use cases
 *  @param[in] req      Array of {title: string, data: string} objects
 *  @return Markdown formatted text
 * 
 * If the item is 'none' or 'all' the returned string is simple that word
 * but in italics.
 * 
 * If the string in the array is preceded by a '!', the string is formatted
 * with a line through it. For example, a TechId that contains '!aztec' in 
 * its 'requires.civ' identifies that tech as not being available to Aztecs.
 * This results in a line through that civ in the generated completion text.
 **************************************************************************/
function getFormattedList(myList: Array<string>) {
	let text = "";
	myList.forEach(item => {
		// Add commas for additional items in the list
		if (item != myList[0]) {
			text += ", ";
		}

		// Item is 'none' or 'all', format in italics
		if ((item === "none") || (item === "all")) {
			text += "*" + item + "*";
		} 
		// A '!' signifies the need to format as a strikethrough
		else if (item[0] === "!") {
			text += "~~" + item.slice(1,) + "~~";
		} 
		// Otherwise add the item as is
		else {
			text += item;
		}
	});
	return text;
}
