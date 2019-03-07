
import {Levenshtein} from 'levenshtein'

/**********************************************************************//**
 * Import AI scripting resources
 **************************************************************************/
import * as aoe2actions    from './resources/aoe2Action.json';
import * as aoe2buildings  from './resources/aoe2BuildingId.json';
import * as aoe2civs       from './resources/aoe2CivId.json';
import * as aoe2facts      from './resources/aoe2Fact.json';
import * as aoe2factaction from './resources/aoe2FactAction.json';
import * as aoe2misc	   from './resources/aoe2Misc.json';
import * as aoe2stratnum   from './resources/aoe2StrategicNumbers.json';
import * as aoe2techs      from './resources/aoe2TechId.json';
import * as aoe2units      from './resources/aoe2UnitId.json';

// Methods and variables to export from this file
export {AiScriptPar, 
		AiScriptType, 
		loadAoE2Parameters, 
		InheritsFrom, 
		guessParam,
		levenGuess
};

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
 * Defines a scripting parameter that can be used for completions and hovers
 **************************************************************************/
interface AiScriptType {
	label: 			   string;
	description: 	   string;
	parentcategories?: string[];
	subcategories?:    string[];
	values: 		   Map<string,AiScriptPar>;
}


/**********************************************************************//**
 * Defines variables associated with a scripting command (facts and actions)
 **************************************************************************/
interface AiScriptCommand {
	name: string;
	description: string;
	note: Array<string>;
	param: Array<{type: string, note: string}>;
	example?: Array<{title: string, data: string}>;
}

// Initialize the parameter list
let ai_script_parameters: Map<string, AiScriptType> = new Map();

/**********************************************************************//**
 * Loads all parameters from the resource files
 **************************************************************************/
function loadAoE2Parameters(): Map<string, AiScriptType> {

    // Fill all the parameters
	loadBuildings();
	loadCommands();
	loadCivs();
	loadMisc();
	loadStrategicNumbers();
	loadTechs();
    loadUnits();

    return ai_script_parameters;
}


/**********************************************************************//**
 * Loads facts, actions and factactions
 **************************************************************************/
function loadCommands() {
	// Facts
	let facts: AiScriptType = {
		label: "Fact",
		description: aoe2facts.Fact.description,
		subcategories: aoe2facts.Fact.subcategories,
		values: new Map()
	};
	aoe2facts.Fact.values.forEach(fact => {
		facts.values[fact.name] = getCommandPar(fact, facts.label);
	});

	// Actions
	let actions: AiScriptType = {
		label: "Action",
		description: aoe2actions.Action.description,
		subcategories: aoe2actions.Action.subcategories,
		values: new Map()
	};
	aoe2actions.Action.values.forEach(action => {
		actions.values[action.name] = getCommandPar(action, actions.label);
	});

	// FactActions
	let factactions: AiScriptType = {
		label: "FactAction",
		description: aoe2factaction.FactAction.description,
		parentcategories: aoe2factaction.FactAction.parentcategories,
		values: new Map()
	};
	aoe2factaction.FactAction.values.forEach(faction => {
		factactions.values[faction.name] = getCommandPar(faction, factactions.label);
	});

	// Add the commands to the type map
	ai_script_parameters[facts.label]       = facts;
	ai_script_parameters[actions.label]     = actions;
	ai_script_parameters[factactions.label] = factactions;
}


/**********************************************************************//**
 * Formats the results from a command object into an AiScriptPar
 **************************************************************************/
function getCommandPar(command: AiScriptCommand, section: string): AiScriptPar {
	// Define command parameters
	let command_pars = [];
	let param_text: string = "";
	if (command.param === undefined) {
		param_text = "";
	} else if (command.param[0].type !== "noop") {
		param_text = getParamText(command.param);
		command_pars = command.param;
	}

	// Get examples text
	let example_text: string = "";
	if (command.example !== undefined) {
		example_text = getExampleText(command.example);
	}

	return {
		label:       command.name,
        description: command.description + param_text + example_text,
        section:     section,
        pars:        command_pars,
        examples:    command.example
	}
}


/**********************************************************************//**
 * Loads BuidingId objects into ai_script_parameters
 **************************************************************************/
function loadBuildings() {
	Object.keys(aoe2buildings).forEach(buildkey => {
		let buildingType: AiScriptType = {
			label: buildkey,
			description: aoe2buildings[buildkey].description,
			parentcategories: aoe2buildings[buildkey].parentcategories,
			subcategories: aoe2buildings[buildkey].subcategories,
            values: new Map()
		}

		// Loop through all of the values
		aoe2buildings[buildkey].values.forEach(building => {
			// Construct building description
			let build_descrip = building.description;
			if (building.requires !== undefined)
				build_descrip += getRequiresText(building.requires);

			buildingType.values[building.name] = {
				label:       building.name,
				description: build_descrip,
				section:     buildkey,
				requires:    building.requires
			};
		});
		ai_script_parameters[buildkey] = buildingType;
	});
}


/**********************************************************************//**
 * Loads CivId objects into ai_script_parameters
 **************************************************************************/
function loadCivs() {
	Object.keys(aoe2civs).forEach(civkey => {
		let civType: AiScriptType = {
			label: civkey,
			description: aoe2civs[civkey].description,
			parentcategories: aoe2civs[civkey].parentcategories,
			subcategories: aoe2civs[civkey].subcategories,
            values: new Map()
		}

		aoe2civs[civkey].values.forEach(civ => {
			// Get description and unique info
			let civ_descrip = civ.name.toUpperCase() + " civilization";
			let civ_unique: AiScriptUniques = undefined;
			if (civ.link === undefined) {
				civ_descrip += getUniquesText(civ.unique);
				civ_unique   = civ.unique;
			} else {
				let civ_par = ai_script_parameters[civ.link.type].values[civ.link.value];
				civ_descrip = civ_par.description;
				civ_unique  = civ_par.unique;
			}

			// Add the civ info
			civType.values[civ.name] = {
				label:       civ.name,
				description: civ_descrip,
				section:     civkey,
				unique:      civ_unique
			};
		});
		ai_script_parameters[civkey] = civType;
	});
}


/**********************************************************************//**
 * Loads Misc resource objects into ai_script_parameters
 **************************************************************************/
function loadMisc() {

	// Loop over all keys and all items in each key
	Object.keys(aoe2misc).forEach(misc => {
		let miscType: AiScriptType = {
			label: misc,
			description: aoe2misc[misc].description,
			parentcategories: aoe2misc[misc].parentcategories,
			subcategories: aoe2misc[misc].subcategories,
            values: new Map()
		}

		if (misc === "Control") {
			aoe2misc[misc].values.forEach(item => {
				miscType.values[item.name] = getCommandPar(item, miscType.label);
			});
		} else {
			aoe2misc[misc].values.forEach(item => {
				miscType.values[item.name] = {
					label:       item.name,
					description: item.description,
					section:     misc,
					id:          item.id
				};
			});
		}
		ai_script_parameters[miscType.label] = miscType;
	});
}


/**********************************************************************//**
 * Loads TechId objects into ai_script_parameters
 **************************************************************************/
function loadStrategicNumbers() {
	let snType: AiScriptType = {
		label: "StrategicNumber",
		description: aoe2stratnum.StrategicNumber.description,
		values: new Map()
	}
	aoe2stratnum.StrategicNumber.values.forEach(num => {
		snType.values[num.name] = {
			label:       num.name,
			description: num.notes,
			section:     snType.label
		};
	});
	ai_script_parameters[snType.label] = snType;
}


/**********************************************************************//**
 * Loads TechId objects into ai_script_parameters
 **************************************************************************/
function loadTechs() {
	let techType: AiScriptType = {
		label: "TechId",
		description: aoe2techs.TechId.description,
		subcategories: aoe2techs.TechId.subcategories,
		values: new Map()
	}
	aoe2techs.TechId.values.forEach(tech => {
		techType.values[tech.name] = {
			label:       tech.name,
			description: tech.description + getRequiresText(tech.requires),
			section:     techType.label,
			requires:    tech.requires
		};
	});
	ai_script_parameters[techType.label] = techType;
}


/**********************************************************************//**
 * Loads UnitId objects into ai_script_parameters
 **************************************************************************/
function loadUnits() {

	Object.keys(aoe2units).forEach(unitkey => {
		let unitType: AiScriptType = {
			label: unitkey,
			description: aoe2units[unitkey].description,
			parentcategories: aoe2units[unitkey].parentcategories,
			subcategories: aoe2units[unitkey].subcategories,
            values: new Map()
		}
		aoe2units[unitkey].values.forEach(unit => {
			// Construct unit description
			let unit_descrip: string = unit.description;
			if (unit.line !== undefined)
				unit_descrip += "\n\n* line: " + unit.line;
			if (unit.class !== undefined)
				unit_descrip += "\n* class: " + unit.class;

			unitType.values[unit.name] = {
				label:       unit.name,
				description: unit_descrip,
				section:     unitkey,
				requires:    unit.requires
			};
		});
		ai_script_parameters[unitkey] = unitType;
	});
}


/**********************************************************************//**
 * Formats the parameters of a command into a markdown string
 *  @param[in] params       Array of {type: string, note: string} objects
 *  @return Markdown formatted text
 **************************************************************************/
function getParamText(params: Array<{type: string, note: string}>) {
	let parText = "\n\n**Parameters**  \n";
	params.forEach(par => {
		if (par.type === "noop") {
			parText += "*none*";
		} else {
			parText += "* **" + par.type + "**: *" + par.note + "*";
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
		// Replace '>', '<', '"'
		let elementData = example[0].data;
		elementData = elementData.split('&lt;').join('<');
		elementData = elementData.split('&gt;').join('>');
		elementData = elementData.split('&quot;').join('"');

		exText = "\n\n**Example**  \n" + example[0].title;
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
	reqText += "\n- **Age:** "      + requires.age;
	reqText += "\n- **Building:** " + getFormattedList(requires.building);
	reqText += "\n- **Techs:** "    + getFormattedList(requires.tech);
	reqText += "\n- **Civ:** "      + getFormattedList(requires.civ);

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


// Define a set of excluded types for inheritance checking. These require
// much more detailed information to accurately check. 
var excluded_types: string[] = ['StrategicNumber', 'GoalId', 'PlayerId', "TauntId", "RelOp", "UpRelOp"];

/**********************************************************************//**
 * Checks if `value` is a member (or subcategory member) of the `expected` type
 *  @param[in] value      	Value to see if it is a member of the 'expected' type
 *  @param[in] expected		Type/category to be checked
 *  @param[in] params		Map of all valid AoE2 script types
 *  @return Whether or not @p value inherits from @p expected
 * 
 * Method is recursive, as it also checks the sub-categories of expected
 * and all of their sub-categories, etc ...
 **************************************************************************/
var InheritsFrom = function ifname(value: string, expected: string, 
					  params?: Map<string, AiScriptType>): boolean
{
	// For now we cannot assess numbers correctly
	if (/^-*[0-9]+$/g.test(value)) return true;
	
	// Load the parameters if none were passed
	if (params === undefined) params = loadAoE2Parameters();

	// TODO: enable better error checking so these exclusions are not necessary
	if (excluded_types.indexOf(expected) !== -1) {
		return true;
	}

	let inherits: boolean = false;
	if (params[expected] !== undefined) {
		if (params[expected].values[value] !== undefined) {
			inherits = true;
		} else if (params[expected].subcategories !== undefined) {
			params[expected].subcategories.forEach(category => {
				inherits = (inherits || ifname(value, category, params));
			});
		}
	}
	return inherits;
}

var levenshtein = require("levenshtein");
interface levenGuess {
	guess: string[];
	dist:  number;
}
var guessParam = function guessPar(input: string, categories: string[],
								   scriptPars: Map<string, AiScriptType>): levenGuess
{
	let curLeven = {
		guess: [],
		dist: 5		// Maximum allowed distance (may need tuning)
	}
	categories.forEach(cat => {
		
		let category: AiScriptType = scriptPars[cat];
		// Test all parameters of this category
		
		Object.keys(category.values).forEach(param => {
			let leven = new levenshtein(input, param);
			curLeven = updateLevenDist({guess:[param], dist: leven.distance}, curLeven);
		});
		
		// Test parameters of subcategories
		if (category.subcategories !== undefined) {
			let newLeven = guessPar(input, category.subcategories, scriptPars);
			curLeven = updateLevenDist(newLeven, curLeven);
		}
		
	});
	
	return curLeven;
}

function updateLevenDist(newLeven: levenGuess, curLeven: levenGuess): levenGuess 
{
	if (newLeven.dist < curLeven.dist) {
		curLeven.guess = newLeven.guess;
		curLeven.dist  = newLeven.dist;
	} 
	else if (newLeven.dist == curLeven.dist) {
		curLeven.guess = curLeven.guess.concat(newLeven.guess);
	}
	return curLeven;
}