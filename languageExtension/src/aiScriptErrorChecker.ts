
import {
    AiScriptPar, 
    AiScriptType, 
    InheritsFrom, 
    guessParam,
    findParam
} from './aiScriptResources'

export {AiScriptErr, AiScriptErrCommandInvalid, AiScriptErrorChecker};

interface AiScriptErrPos {
    start: number;
    stop:  number;
}

type AiScriptErrSeverity = 1 /*Error*/ | 2 /*Warning*/ | 3 /*Info*/ | 4 /*Hint*/;

/******************************************************************//**
 * @interface AiScriptErr
 * Defines everything associated with a script error
 **********************************************************************/
interface AiScriptErr {
    severity: AiScriptErrSeverity; // 1: Error, 2: Warming, 3: Information, 4: Hint
    filename: string;
    code:     number;
    message:  {short: string, long?: string};
    position: AiScriptErrPos;
};

/******************************************************************//**
 * @function AiScriptErrCommandInvalid
 * Function to generate an error
 **********************************************************************/
function AiScriptErrDefine(position: AiScriptErrPos, severity: AiScriptErrSeverity,
                           messageShort: string, messageLong?: string): AiScriptErr
{
    return {
        severity: severity,
        filename: "unknown",
        code: 0,
        message: {
            short: messageShort,
            long: (messageLong !== undefined) ? messageLong : messageShort
        },
        position: {
            start: position.start,
            stop:  position.stop
        }
    };
};

/******************************************************************//**
 * @function AiScriptErrCommandInvalid
 * Error when a command is unknown
 **********************************************************************/
function AiScriptErrCommandInvalid(position: AiScriptErrPos, 
                                   messageShort: string, messageLong?: string): AiScriptErr 
{
    let err = AiScriptErrDefine(position, 1, messageShort, messageLong);
    err.code = 2003;
    return err;
};

/******************************************************************//**
 * @function AiScriptErrParamInvalidCount
 * Error when a parameter to a command is incorrect
 **********************************************************************/
function AiScriptErrParamInvalidCount(position: AiScriptErrPos,
    messageShort: string, messageLong?: string): AiScriptErr 
{
    let err = AiScriptErrDefine(position, 1, messageShort, messageLong);
    err.code = 2004;
    return err;
}

/******************************************************************//**
 * @function AiScriptErrIndentifierInvalid
 * Error when a parameter to a command is incorrect
 **********************************************************************/
function AiScriptErrIndentifierInvalid(position: AiScriptErrPos, 
                                       messageShort: string, messageLong?: string): AiScriptErr 
{
    let err = AiScriptErrDefine(position, 1, messageShort, messageLong);
    err.code = 2005;
    return err;
}

/******************************************************************//**
 * @class AiScriptErrorChecker
 * Runs checks for all files
 **********************************************************************/
class AiScriptErrorChecker {

    // List of known parameters
    private _params: Map<string, AiScriptType>;

    /** 
     * Constructs the error checker
     * @param[in] params        List of known aoe2 commands/identifiers
     */
    constructor(params: Map<string, AiScriptType>) {
        this._params = params;
    }


    /** 
     * Returns a full list of errors
     */
    runErrorChecker(scriptText: string, maxErrors: number=10000): AiScriptErr[] {
        // List of errors that will be extended as we go
        let errors: AiScriptErr[] = [];
    
        // Command related errors
        errors = errors.concat(this.checkCommands(scriptText, maxErrors));
    
        return errors;
    }

    //=========================================
    // Methods that check for specific errors
    //=========================================
    
    checkCommand(ruleText: string): AiScriptErr[] {
        let errors: AiScriptErr[] = [];
        return errors;
    };
    checkFacts(commandText: string): AiScriptErr[] {
        let errors: AiScriptErr[] = [];
        return errors;
    }
    checkActions(commandText: string): AiScriptErr[] {
        let errors: AiScriptErr[] = [];
        return errors;
    }


    /** 
     * Check for all command related errors
     */
    checkCommands(scriptText: string, maxErrors: number=10000): AiScriptErr[] {

        let errors: AiScriptErr[] = [];
    
        // Regex for finding commands
        let command_pattern: RegExp = /(\(\s*)\w[^\(\)]*(\".*\")*[^\(\)]*(?=\s*\))/g;

        // Search the script text
        let m: RegExpExecArray | null;
        while ((m = command_pattern.exec(scriptText)) && (errors.length < maxErrors)) {
    
            // Check if we're in a comment
            if (AiScriptErrorChecker.isComment(scriptText, m.index)) {
                continue;
            }
            // Get the command text, stripping the leading paren and any spaces after it
            let test_str = m[0].slice(m[1].length,);

            // Search for matching command
            let right_pad = m[1].length;
            if (m.length > 2) 
                test_str   = test_str.replace(/\"[\s\S]*\"/g, 'STRING');
    
            // Replace strings with a single word, for ease of parsing
            let test_arr  = test_str.split(/\s+/g);
            let test_com  = test_arr[0];
            let com_match: AiScriptPar = this._params["Control"].values[test_com];
            if (com_match === undefined)
                com_match = this._params["Fact"].values[test_com];
            if (com_match === undefined)
                com_match = this._params["Action"].values[test_com];
            if (com_match === undefined)
                com_match = this._params["FactAction"].values[test_com];

            // Define the default command start/stop positions
            let pos: AiScriptErrPos = {
                start: m.index + right_pad, 
                stop: m.index + m[0].length
            };

            // Run checks on the match
            if (com_match === undefined) {
                // Failure to find a match for the command
                pos.stop   = pos.start + test_arr[0].length;
                let errMsg = "Unknown command `" + test_arr[0] + "`.";
                let best_guess: string[] = guessParam(test_arr[0], 
                                                    ["Fact","Action"],
                                                    this._params).guess;
                if (best_guess.length > 0) {
                    errMsg += " Did you mean: " + best_guess.join(', ');
                }
                errors.push( AiScriptErrCommandInvalid(pos, errMsg) );
            }

            // ... check there are no parameters when there shouldn't be
            else if (com_match.pars === undefined) {
                if (test_arr.length > 1) {
                    let message: string = "Incorrect number of arguments to " +
                                      "`"+test_arr[0]+"` " + "(expected 0" +
                                      " but got " + (test_arr.length-1) + ")";
                    pos.start = pos.start + test_arr[0].length + 1;
                    let err = AiScriptErrParamInvalidCount(pos, "Expected 0 arguments", message);
                    errors.push(err);
                }
            } 
            
            // ... check we have the correct number of arguments
            else if ((com_match.pars.length !== test_arr.length - 1)) {
                let message: string = "Incorrect number of arguments to " +
                                      "`"+test_arr[0]+"` " +
                                      "(expected " + com_match.pars.length +
                                      " but got " + (test_arr.length-1) + ")";
                pos.start = pos.start + test_arr[0].length + 1;
                let err = AiScriptErrParamInvalidCount(pos, "Incorrect number of arguments", message);
                errors.push(err);
            }
            
            // ... Check the individual parameters are valid
            else {
                
                // Check all parameters are of correct type
                for (let i=1; i<test_arr.length; ++i) {
                    
                    // Offset the position values
                    pos.start += test_arr[i-1].length + 1;
                    pos.stop   = pos.start + test_arr[i].length;

                    // Get the expected parameter type and parameter
                    let expected: string = com_match.pars[i-1].type;
                    let parValue: string = test_arr[i];
                    
                    let parObj = findParam(this._params, parValue);

                    // Check type is valid
                    if (this._params[expected] === undefined) {
                        let message: string = "Unkown parameter type encountered: " +
                                              "`" + expected + "`\n" +
                                              "This is probably a bug in the extension, please report it!";
                        let err = AiScriptErrDefine(pos, 2, message);
                    }

                    // Check if the parameter is of valid type
                    else if (!InheritsFrom(parValue, expected, this._params)) {
                        let message: string = "Expected parameter of type " +
                                      "`" + expected + "`. Value `"+parValue+"` invalid.";
                        let best_guess: string[] = guessParam(test_arr[0], 
                                                              [expected],
                                                              this._params).guess;
                        if (best_guess.length > 0) {
                            message += " Did you mean: " + best_guess.join(', ');
                        }
                        let err = AiScriptErrIndentifierInvalid(pos, "Invalid parameter", message);
                        errors.push(err);
                    }

                    /*
                    // Check if the parameter needs to be defined
                    else if ((parObj !== undefined) && (parObj.defined === false)) {
                            let message: string = "Friendly reminder that this parameter "+
                                                "must be defined by you in a dedicated "+
                                                "`defconst` before it is used.";
                            let err = AiScriptErrDefine(pos, 2, message);
                            errors.push(err);
                    }
                    */
                }
            }
        }
    
        return errors;
    };    
    

    static isComment(scriptText: string, index: number): boolean {
        while (scriptText[index--] !== "\n") {
            if (scriptText[index] === ";")
                return true;
        }
        // Made it to the start of the line
        return false;
    }
};