const ExpectedNumber = require("./ExpectedNumber");
const Operation = require("./Operation");

module.exports =
    class Monomial extends Operation{
        constructor(n){
            super();

            ExpectedNumber.IsANumber(n,"n")
            this.n = parseFloat(n);
        }
    }