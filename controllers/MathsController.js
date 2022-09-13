const MathsModel = require('../models/math');
const Repository = require('../models/repository');
module.exports =
    class MathsController extends require('./Controller') {
        constructor(HttpContext) {
            super(HttpContext);
            this.repository = new Repository(new MathsModel());

        }
        get(id) {
            this.HttpContext.response.accepted();
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