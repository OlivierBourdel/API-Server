const Operation = require("./Operation");
const ExpectedNumber = require("./ExpectedNumber");
module.exports =
    class Binomial extends Operation{
        constructor(x,y){
            super();

            ExpectedNumber.IsANumber(x,"x");
            ExpectedNumber.IsANumber(y,"y");
            
            this.x = parseFloat(x);
            this.y = parseFloat(y);
        }
    }