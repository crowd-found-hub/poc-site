/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import FeatureRepository = require("./../repository/FeatureRepository");
import IFeatureBusiness = require("./interfaces/FeatureBusiness");
import IFeatureModel = require("./../model/interfaces/FeatureModel");
import FeatureModel = require("./../model/FeatureModel");


class FeatureBusiness implements IFeatureBusiness {
    private _featureRepository: FeatureRepository;

    constructor () {
        this._featureRepository = new FeatureRepository();
    }

    create (item: IFeatureModel, callback: (error: any, result: any) => void) {
        this._featureRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._featureRepository.retrieve(callback);
    }

    retrieveByProjectId (_projectId: string, callback: (error: any, result: any) => void) {
        this._featureRepository.retrieveByProjectId(_projectId, callback);
    }

    update (_id: string, item: IFeatureModel, callback: (error: any, result: any) => void) {

        this._featureRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._featureRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._featureRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IFeatureModel) => void) {
        this._featureRepository.findById(_id, callback);
    }

}


Object.seal(FeatureBusiness);
export = FeatureBusiness;