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

	// Parent and child categories
	parentcategories?: Array<{type: string}>;
	subcategories?: Array<{type: string}>;
	
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
	note: Array<string>;
	param: Array<{type: string, note: string}>;
	example: Array<{title: string, data: string}>;
}

// Initialize the parameter list
let ai_script_parameters: Map<string, AiScriptPar> = new Map();

/**********************************************************************//**
 * Loads all parameters from the resource files
 **************************************************************************/
function loadAoE2Parameters(): Map<string, AiScriptPar> {

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
	aoe2facts.Fact.values.forEach(fact => {
		ai_script_parameters[fact.name] = getCommandPar(fact, "Fact");
	});
	aoe2actions.Action.values.forEach(action => {
		ai_script_parameters[action.name] = getCommandPar(action, "Action");
	});
	aoe2factaction.FactAction.values.forEach(faction => {
		ai_script_parameters[faction.name] = getCommandPar(faction, "FactAction");
	});
}


/**********************************************************************//**
 * Formats the results from a command object into an AiScriptPar
 **************************************************************************/
function getCommandPar(command: AiScriptCommand, section: string): AiScriptPar {
	return {
		label:       command.name,
        description: command.description + 
                        getParamText(command.param) + 
                        getExampleText(command.example),
        section:     section,
        pars:        command.param,
        examples:    command.example
	}
}


/**********************************************************************//**
 * Loads BuidingId objects into ai_script_parameters
 **************************************************************************/
function loadBuildings() {
	Object.keys(aoe2buildings).forEach(buildkey => {
		aoe2buildings[buildkey].values.forEach(building => {
			// Construct building description
			let build_descrip = building.description;
			if (building.requires !== undefined)
				build_descrip += getRequiresText(building.requires);

			ai_script_parameters[building.name] = {
				label:       building.name,
				description: build_descrip,
				section:     buildkey,
				requires:    building.requires
			};
		});
	});
}


/**********************************************************************//**
 * Loads CivId objects into ai_script_parameters
 **************************************************************************/
function loadCivs() {

	Object.keys(aoe2civs).forEach(civkey => {
		aoe2civs[civkey].values.forEach(civ => {
			// Get description and unique info
			let civ_descrip = civ.name.toUpperCase() + " civilization";
			let civ_unique  = "none";
			if (civ.link === undefined) {
				civ_descrip += getUniquesText(civ.unique);
				civ_unique   = civ.unique;
			} else {
				let civ_par = undefined;
				Object.keys(ai_script_parameters).forEach(key => {
					let element = ai_script_parameters[key];
					if ((element.section == civ.link.type) && (element.label == civ.link.value))
						civ_par = element;
				});
				civ_descrip = civ_par.description;
				civ_unique  = civ_par.unique;
			}

			// Add the civ info
			ai_script_parameters[civ.name] = {
				label:       civ.name,
				description: civ_descrip,
				section:     civkey,
				unique:      civ_unique
			};
		});
	});
}


/**********************************************************************//**
 * Loads Misc resource objects into ai_script_parameters
 **************************************************************************/
function loadMisc() {

	// Loop over all keys and all items in each key
	Object.keys(aoe2misc).forEach(misc => {
		aoe2misc[misc].values.forEach(item => {
			ai_script_parameters[item.name] = {
				label:       item.name,
				description: item.description,
				section:     misc,
				id:          item.id
			};
		});
	});
}


/**********************************************************************//**
 * Loads TechId objects into ai_script_parameters
 **************************************************************************/
function loadStrategicNumbers() {

	aoe2stratnum.StrategicNumber.forEach(num => {
		ai_script_parameters[num.name] = {
			label:       num.name,
			description: num.notes,
			section:     "StrategicNumber"
		};
	});
}


/**********************************************************************//**
 * Loads TechId objects into ai_script_parameters
 **************************************************************************/
function loadTechs() {

	aoe2techs.TechID.forEach(tech => {
		ai_script_parameters[tech.name] = {
			label:       tech.name,
			description: tech.description + getRequiresText(tech.requires),
			section:     "TechId",
			requires:    tech.requires
		};
	});
}


/**********************************************************************//**
 * Loads UnitId objects into ai_script_parameters
 **************************************************************************/
function loadUnits() {

	Object.keys(aoe2units).forEach(unitkey => {
		aoe2units[unitkey].values.forEach(unit => {
			// Construct unit description
			let unit_descrip: string = unit.description;
			if (unit.line !== undefined)
				unit_descrip += "\n\n* line: " + unit.line;
			if (unit.class !== undefined)
				unit_descrip += "\n* class: " + unit.class;

			ai_script_parameters[unit.name] = {
				label:       unit.name,
				description: unit_descrip,
				section:     unitkey,
				requires:    unit.requires
			};
		});
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
		if (par.type === "none") {
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
