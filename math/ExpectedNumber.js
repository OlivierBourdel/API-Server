module.exports = 
    class ExpectedNumber{
        constructor(){}

        static IsAnInteger(n,varName) {
            if(!Number.isInteger(parseFloat(n))){
                throw new Error(`'${varName}' is not an integer`);
            }
        } 

        static IsANumber(n,varName) {
            if(Number.isNaN(parseFloat(n))){
                throw new Error(`'${varName}' is not a number`);
            }
        } 

        static NotZero(n,varName) {
            if(n == 0){
                throw new Error(`'${varName}' cannot be equal to zero`);
            }
        } 

        static NotNegative(n,varName){
            if(n < 0){
                throw new Error(`'${varName}' cannot be negative`);
            }
        }
    }