const ExpectedNumber = require("../../ExpectedNumber");
const Monomial = require("../../Monomial");
const Prime = require('./Prime');

module.exports = 
    class PrimeN extends Monomial{
        constructor(n){
            super(n);

            ExpectedNumber.IsAnInteger(n,"n");
            ExpectedNumber.NotNegative(n,"n");
        }

        GetResult(){
            let primeNumber = 0;
            for ( let i=0; i < this.n; i++){
                primeNumber++;
                while (Prime.isPrime(primeNumber)){
                    primeNumber++;
                }
            }
            return primeNumber;
        }
    }