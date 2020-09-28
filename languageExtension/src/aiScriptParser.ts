import {AiScriptPar, AiScriptType} from './aiScriptResources';
import {readFileSync, readFile}  from 'fs';
import {AiScriptErr, AiScriptErrorChecker} from './AiScriptErrorChecker'
import { join } from 'path';
import { URL } from 'url';

export {
    AiScriptParser,
    AiScriptScope,
    AiScriptScopeType,
}

var scp_open:  string[] = ["(", ";",  "\"", "#load-if-defined"];
var scp_close: string[] = [")", "\n", "\"", "#end-if"];

enum AiScriptScopeType {
    COMMENT = 0,
    LOAD_IF_DEFINED,
    LOAD,
    LOAD_RANDOM,
    DEFCONST,
    DEFRULE,
    FACT,
    ACTION
}

interface AiScriptScope {
    filename: string;           // File where scope is defined
    type: AiScriptScopeType;    // Scope type (#load-if, load, load-random, defconst, defrule, etc...)
    type_ext?: string;          // Extended info about the type (such as Fact or Action name)
    start: number;              // Character index of the scope start
    stop: number;               // Character index of the scope's end
}

/******************************************************************//**
 * @class AiScriptParser
 * Capable of detecting certain errors 
 **********************************************************************/
class AiScriptParser {

    private _aifile:        string;                    // Top level '.ai' file
    private _top_perfile:   string;                    // Top level '.per' file
    private _top_directory: string;                    // AI containing directory
    private _perfiles:      string[];                  // All associated '.per' files loaded
    private _std_aoe2pars:  Map<string, AiScriptType>; // Standard AoE2 script commands and IDs
    private _ai_aoe2pars:   Map<string, AiScriptType>; // AI defined AoE2 script constants/goals
    private _ai_errors:     AiScriptErr[];             // Detected errors in the script
    private _passed_scopes: Map<string, AiScriptScope[]>; // List of scopes that are passed to a file
    private _ai_scopes:     Map<string, AiScriptScope[]>; // Detected scopes keyed by filename

    // Some book keeping only relevant during an active parsing
    private _scopes:        AiScriptScope[];           // Scopes in the actual AI object
    private _cur_file:      string[];                  // Current file

    logger: string;
    logThis(value: string): void {
        if (false) { // Set to false for release
            this.logger += value + "\n";
        }
    }

    /******************************************************************//**
     * Constructor
     * @param[in] aifile        Full path to a given '.ai' file
     * @param[in] parameters    AoE2 script parameters
     **********************************************************************/
    constructor(ainame: string, aidir: string, parameters: Map<string, AiScriptType>) {
        // Set the top level filenames
        this._top_directory = aidir;
        this._aifile        = join(aidir, ainame + '.ai');
        this._top_perfile   = join(aidir, ainame + '.per');
        this._std_aoe2pars  = parameters;

        // Clear everything
        this.reset();
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
    // getErrors(script_text: string, maxErrors: number=10000): AiScriptErr[] {
    //     let errorChecker: AiScriptErrorChecker = new AiScriptErrorChecker(this._std_aoe2pars);
    //     let errors: AiScriptErr[] = errorChecker.runErrorChecker(script_text, maxErrors);
    //     return errors;
    // }

    getErrors(): AiScriptErr[] {
        return this._ai_errors;
    }


    /************************************************************//**
     * UPDATED FUNCTIONS 
     ****************************************************************/


    /**
     * Get the correct string for a file path on any system
     */
    filepath(relative_path: string): string {
        let filepath: string = this._top_directory;
        relative_path.split("\\").forEach(dirname => {
            filepath = join(filepath, dirname);
        });
        return filepath
    }


    /**
     * Clears all existing stored information about the AI script
     */
    reset(): void {
        this._scopes = [];
        this._ai_scopes = new Map<string, AiScriptScope[]>();
        this._ai_errors = [];
        this._passed_scopes = new Map<string, AiScriptScope[]>();
        this._cur_file = [];
    }


    /**
     * Parse the entire AI (just calls parseFile on main '.per' file)
     */
    parse(): void {
        // Clear the scopes and errors
        this.reset();

        this.logThis("START OF LOGGING:");
        
        // Parse the script
        this.parseFile(this._top_perfile, this._scopes);

        // Make sure all scopes are closed
        this._scopes.forEach(scope => {
            this._ai_errors.push(AiScriptErrorChecker.getScopeError(scope));
        });
        this.logThis("STOP LOGGING");
    }


    /**
     * Parse a given file
     */
    parseFile(filename: string, active_scopes: AiScriptScope[]): void {
        this.logThis("parsing file: " + filename);
        // Append the file to the list and create an entry in 'passed_scopes'
        this._cur_file.push(filename);
        this._passed_scopes[filename] = active_scopes;
        this._ai_scopes[filename] = [];

        let url: URL = new URL(filename);
        let text: string = readFileSync(url, 'utf8');
        this.parseCode(text, 0, active_scopes);

        // Remove the file
        this._cur_file.pop();

        // TODO: If there are no defrule scopes in the file, generate an error
    }


    /**
     * Parse a given section of code
     */
    parseCode(code: string, indx_offset: number, active_scopes: AiScriptScope[]): void {

        let incomment: boolean     = false;         // current comment status
        let indx:      number      = -1;            // index in the 'code' string
        let c:         string      = undefined;     // Current character
        let err:       AiScriptErr = undefined;     // An error

        let enforce_close: boolean = false;         // Produces an error if we try to open
                                                    // another scope when 'enforce_close' = true

        let closings: string[]      = [];
        let scopes: AiScriptScope[] = [];
        // Loop through all characters
        while (++indx < code.length) {
            c = code[indx];

            // Only parse if not in a comment
            if (!incomment) {
                if (c === ";") {
                    incomment = true;
                } 

                else if ((closings.length > 0) && (c === closings[closings.length - 1])) {
                    // Close the current scope
                    let scope = scopes[scopes.length - 1];
                    scope.stop = indx+indx_offset;
                    this._ai_scopes[scope.filename].push(scope);
                    this.parseScope(code.substring(scope.start, scope.stop), scopes);
                    scopes.pop();
                    closings.pop();
                    enforce_close = false;
                }

                // Check if we're starting a new scope

                
                else if (c === "(") {

                    /* defconst */
                    if (code.substr(indx, 9) === "(defconst") {
                        this.logThis("defconst encountered");
                        // We've found a defconst
                        scopes.push({
                            filename: this._cur_file[this._cur_file.length-1],
                            type: AiScriptScopeType.DEFCONST,
                            start: indx+1+indx_offset,
                            stop: indx+1+indx_offset
                        });
                        closings.push(")");
                        enforce_close = true;
                    }

                    /* defrule */

                    /* load */
                    else if (code.substr(indx, 6) === "(load ") {
                        this.logThis("load encountered");
                        // We've found a defconst
                        scopes.push({
                            filename: this._cur_file[this._cur_file.length-1],
                            type: AiScriptScopeType.LOAD,
                            start: indx+1+indx_offset,
                            stop: indx+1+indx_offset
                        });
                        closings.push(")");
                        enforce_close = true;
                    }

                    /* load-random */
                    else if (code.substr(indx, 12) === "(load-random") {
                        this.logThis("load-random encountered");
                        // We've found a defconst
                        scopes.push({
                            filename: this._cur_file[this._cur_file.length-1],
                            type: AiScriptScopeType.LOAD_RANDOM,
                            start: indx+1+indx_offset,
                            stop: indx+1+indx_offset
                        });
                        closings.push(")");
                        enforce_close = true;
                    }
                }
                
            }
            // ... indentify when we've finished the comment
            else if (c === "\n") {
                incomment = false;
            }
            
        }

    }


    parseScope(code: string, active_scopes: AiScriptScope[]): string {
        let scope = active_scopes[active_scopes.length - 1];

        switch(scope.type) {
            case AiScriptScopeType.DEFCONST:
                this.parseDefconst(code, scope.start);
                break;
            case AiScriptScopeType.FACT:
                this.parseFact(code, scope.start, active_scopes);
                break;
            case AiScriptScopeType.ACTION:
                this.parseAction(code, scope.start, active_scopes);
                break;
            case AiScriptScopeType.DEFRULE:
                this.parseDefrule(code, scope.start, active_scopes);
                break;
            case AiScriptScopeType.LOAD:
                this.parseLoad(code, scope.start, active_scopes);
                break;
            case AiScriptScopeType.LOAD_RANDOM:
                this.parseLoadRandom(code, scope.start, active_scopes);
                break;
            case AiScriptScopeType.LOAD_IF_DEFINED:
                this.parseCode(code, scope.start, active_scopes);
                break;
        }
        return "";
    }


    parseDefconst(code: string, offset: number): void {
        this.logThis("parsing defconst: " + code);

        let space = {left: 0, right: 0}
        code = this.trim_code(code, space); // trim white space from front and back

        let defconst_vals = code.split(/\s+/g);
        
        // Throw error if there are too many parameters
        if (defconst_vals.length > 3) {
            Error
        }
    }

    parseDefrule(code: string, offset: number, active_scopes: AiScriptScope[]): void {

    }

    parseFact(code: string, offset: number, active_scopes: AiScriptScope[]): void {

    }

    parseAction(code: string, offset: number, active_scopes: AiScriptScope[]): void {

    }

    parseLoad(code: string, offset: number, active_scopes: AiScriptScope[]): void {

    }

    parseLoadRandom(code: string, offset: number, active_scopes: AiScriptScope[]): void {
        
    }

    trim_code(code: string, space: {left:number, right: number}): string {
        let trimmed = code.trimLeft();
        space.left  = code.length - trimmed.length;
        trimmed = trimmed.trimRight();
        space.right = code.length - trimmed.length - space.left;
        return trimmed;
    }

    getScopes(): Map<string, AiScriptScope[]> {
        return this._ai_scopes;
    }

};
