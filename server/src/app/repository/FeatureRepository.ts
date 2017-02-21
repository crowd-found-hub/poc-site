import FeatureModel = require("./../model/FeatureModel");
import IFeatureModel = require("./../model/interfaces/FeatureModel");
import FeatureSchema = require("./../dataAccess/schemas/FeatureSchema");
import RepositoryBase = require("./BaseRepository");

import mongoose = require("mongoose");

class FeatureRepository  extends RepositoryBase<IFeatureModel> {

    private _featureSchema: mongoose.Model<mongoose.Document>;

    constructor () {
        super(FeatureSchema);
        this._featureSchema = FeatureSchema;
    }

    retrieveByProjectId (_projectId: string, callback: (error: any, result: any) => void) {
        this._featureSchema.find({'projectId': _projectId}, callback)
    }
}

Object.seal(FeatureRepository);
export = FeatureRepository;