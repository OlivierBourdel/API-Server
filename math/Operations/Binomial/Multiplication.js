const Binomial = require("../../Binomial");

module.exports = 
    class Addition extends Binomial{
        constructor(x,y){
            super(x,y);
        }

        GetResult(){
            return this.x * this.y;
        }
    }