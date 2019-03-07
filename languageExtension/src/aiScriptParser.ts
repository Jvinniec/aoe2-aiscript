import {AiScriptPar, AiScriptType} from './aiScriptResources';
import {readFileSync}  from 'fs';
import {AiScriptErr, AiScriptErrorChecker} from './AiScriptErrorChecker'


/******************************************************************//**
 * @class AiScriptParser
 * Capable of detecting certain errors 
 **********************************************************************/
export class AiScriptParser {

    private _aifile:       string;                   // Top level '.ai' file
    private _perfile_top:  string;                   // Top level '.per' file
    private _perfiles:     string[];                 // All associated '.per' files loaded
    private _std_aoe2pars: Map<string, AiScriptType>; // Standard AoE2 script commands and IDs
    private _ai_aoe2pars:  Map<string, AiScriptType>; // AI defined AoE2 script constants/goals

    /******************************************************************//**
     * Constructor
     * @param[in] aifile        Full path to a given '.ai' file
     * @param[in] parameters    AoE2 script parameters
     **********************************************************************/
    constructor(aifile: string, parameters: Map<string, AiScriptType>) {
        // Set the top level filenames
        this._aifile       = aifile;
        this._perfile_top  = aifile.slice(0, aifile.indexOf('.ai')) + '.per';
        this._std_aoe2pars = parameters;
    };

    /******************************************************************//**
     * Clears list of files to be parsed
     **********************************************************************/
    clearFiles(): void {
        this._perfiles = [];
    };

    /******************************************************************//**
     * Parse files to build a list of errors in the files
     **********************************************************************/
    parseFiles(): void {
        // Loop through all files and locate the other loads
    };

    /******************************************************************//**
     * Parse files to build a list of errors in the files
     **********************************************************************/
    filesToParse(): string[] {
        // Loop through all files and locate the other loads
        return this._perfiles;
    };

    /******************************************************************//**
     * Search for all files that need to be loaded
     * @param[in] filepath      Path to top file to begin searching loaded files
     **********************************************************************/
    findFiles(filepath?: string): void {
        // Load the file
        let text: string = readFileSync(filepath, 'utf8');
    
        // Get all of the files loaded by this file
        let load_regex = /\(\s*load(-random){0,1}[\s\S]+[^\(\)][\s\S]+\)/g;
        let file_regex = /\"[^\"]+\"/g;
    
        // Loop through all of these files
        let m: RegExpExecArray | null;
        while (m = load_regex.exec(text)) {
    
            // Extract the filename, note here that if using load-random
            // there may be multiple files in the 
            let file_match: RegExpExecArray | null;
            while (file_match = file_regex.exec(m[0])) {
    
                // Remove the leading and trailing quotes
                let file_name: string = file_match[0]
                file_name = file_name.substr(1,file_name.length - 2);
    
                // Only search the file if it hasn't already been loaded
                if (this._perfiles.indexOf(file_name) == -1) {
                    this._perfiles.push(file_name);
                    this.findFiles(file_name);
                }
            }
        }
    };

    /**
     * Returns a list of constants defined by the AI
     */
    //getDefconsts(filepath?: null | string): void;

    /**
     * Returns a list of errors in the file defined by the AI
     */
    getErrors(script_text: string, maxErrors: number=10000): AiScriptErr[] {
        let errorChecker: AiScriptErrorChecker = new AiScriptErrorChecker(this._std_aoe2pars);
        let errors: AiScriptErr[] = errorChecker.runErrorChecker(script_text, maxErrors);
        return errors;
    }
};
