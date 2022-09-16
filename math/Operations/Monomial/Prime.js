const ExpectedNumber = require("../../ExpectedNumber");
const Monomial = require("../../Monomial");

module.exports = 
    class Prime extends Monomial{
        constructor(n){
            super(n);

            ExpectedNumber.IsAnInteger(n,"n");
            ExpectedNumber.NotNegative(n,"n");
        }

        static isPrime(n){
            for(var i = 2; i < n; i++) {
                if(n % i === 0) {
                    return false;
                }
            }
            return n > 1;
        }

        GetResult(){
            return Prime.isPrime(this.n);
        }
    }