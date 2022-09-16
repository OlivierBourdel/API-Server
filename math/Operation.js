//GetResult throws an error, this way Operation and by descendence Binomial 
//and Monomial can't call GetResult as they don't implement it.

module.exports =
    class Operation  {
        constructor() {

        }

        GetResult(){
            throw Error("Not implemented");
        }
    }