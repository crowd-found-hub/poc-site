import DataAccess = require('../DataAccess');
import IFeatureModel = require("./../../model/interfaces/FeatureModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class FeatureSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            projectId: {
                type: String,
                required: true
            },
            name : {
                type: String,
                required: true
            },
            description: {
                type: String,
                require: false
            },
            isForkable: {
                type: Boolean,
                require: true
            },
            status: {
                type: String,
                require: true
            },
            assignedTo: {
                type: String,
                require: false
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IFeatureModel>("Features", FeatureSchema.schema);
export = schema;""