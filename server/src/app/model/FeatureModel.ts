import IFeatureModel = require('./interfaces/FeatureModel');

class FeatureModel {

    private _featureModel: IFeatureModel;

    constructor(featureModel: IFeatureModel) {
        this._featureModel = featureModel;
    }

    get projectId (): string {
        return this._featureModel.projectId;
    }

    get name (): string {
        return this._featureModel.name;
    }

    get description (): string {
        return this._featureModel.description;
    }

    get isForkable (): boolean {
        return this._featureModel.isForkable;
    }

    get status (): string {
        return this._featureModel.status;
    }

    get assignedTo (): string {
        return this._featureModel.assignedTo;
    }

    get pledgeTotal (): number {
        return this._featureModel.pledgeTotal;
    }
}
Object.seal(FeatureModel);
export =  FeatureModel;