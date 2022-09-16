const Utilities = require("../utilities");

const Addition = require("./Operations/Binomial/Addition");
const Substraction = require('./Operations/Binomial/Substraction');
const Multiplication = require('./Operations/Binomial/Multiplication');
const Division = require('./Operations/Binomial/Division');
const Modulo = require('./Operations/Binomial/Modulo');
const Factorial = require('./Operations/Monomial/Factorial');
const Prime = require('./Operations/Monomial/Prime');
const PrimeN = require('./Operations/Monomial/PrimeN');
const Binomial = require("./Binomial");

const Operations = {
    '+' : Addition,
    '-' : Substraction,
    '*' : Multiplication,
    '/' : Division,
    '%' : Modulo,
    '!' : Factorial,
    'p' : Prime,
    'np' : PrimeN
}


module.exports = 
    class OperationSelector{
        constructor(){}


        static GetOperation(params){
            let results = { };
            try{
                let operatorSign = params["op"] == ' ' ? '+' : params["op"];
                let operator = Operations[operatorSign];

                results["op"] = operatorSign;
                if(operator == null){
                    throw Error("invalid operator");
                }
                
                let operation;
                if(Object.getPrototypeOf(operator) == Binomial){
                    if(Object.keys(params).length > 3){
                        throw new Error("too many parameters, only 'x' and 'y' should be defined");
                    }
                    results["x"] = !Utilities.isNullOrEmpty(params["x"]) ? params["x"] : "Not provided";
                    results["y"] = !Utilities.isNullOrEmpty(params["y"]) ? params["y"] : "Not provided";
                    operation = new operator(params["x"],params["y"]);
                }else{
                    if(Object.keys(params).length > 2){
                        throw new Error("too many parameters, only 'n' should be defined");
                    }
                    results["n"] = !Utilities.isNullOrEmpty(params["n"]) ? params["n"] : "Not provided";
                    operation = new operator(params["n"]);
                }
            
                results["result"] = operation.GetResult();
            }catch(e){
                results["error"] = e.message;
            }

            return results;
        }
    }