const OperationSelector = require('../math/OperationSelector');
const fs = require('fs');

module.exports =
    class MathsController extends require('./Controller') {
        constructor(HttpContext) {
            super(HttpContext);
        }
        get(request) {
            let params = this.HttpContext.path.params;
            if(params != null){
                if(params["op"] != null){
                    let result = OperationSelector.GetOperation(params);
                    try{
                        this.HttpContext.response.JSON(result);
                    }catch(e){
                        this.HttpContext.response.JSON({"error": `${e}`});
                    }

                } 
                else{
                    fs.readFile("./controllers/MathsController.html",(err,data) =>{
                        if(err){
                            this.HttpContext.response.HTML("Documentation unavailable");
                        }else{
                            this.HttpContext.response.HTML(data);
                        }
                    });

                }
            }
            else{
                this.HttpContext.response.JSON({"error": "no parameters"})
            }


        }
        post(data) {
            this.HttpContext.response.notImplemented();
        }
        put(data) {
            this.HttpContext.response.notImplemented();
        }
        remove(id) {
            this.HttpContext.response.notImplemented();
        }
    }