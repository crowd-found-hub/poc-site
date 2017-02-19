/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            username : {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
export = schema;""