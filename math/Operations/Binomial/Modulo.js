const Binomial = require("../../Binomial");
const ExpectedNumber = require("../../ExpectedNumber");

module.exports = 
    class Modulo extends Binomial{
        constructor(x,y){
            super(x,y);

            ExpectedNumber.NotZero(y,"y");
        }

        GetResult(){
            return this.x % this.y;
        }
    }