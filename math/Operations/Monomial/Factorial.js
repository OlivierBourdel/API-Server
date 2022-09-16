const ExpectedNumber = require("../../ExpectedNumber");
const Monomial = require("../../Monomial");

module.exports = 
    class Factorial extends Monomial{
        constructor(n){
            super(n);

            ExpectedNumber.IsAnInteger(n,"n");
            ExpectedNumber.NotNegative(n,"n");
        }

        static CalcFactorial(n){
            if(n===0||n===1){
                return 1;
              }
              return n*Factorial.CalcFactorial(n-1);
        }
        GetResult(){
            return Factorial.CalcFactorial(this.n);
        }
    }