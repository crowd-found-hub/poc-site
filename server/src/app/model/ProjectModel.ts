/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IProjectModel = require('./interfaces/ProjectModel');

class ProjectModel {

    private _projectModel: IProjectModel;

    constructor(projectModel: IProjectModel) {
        this._projectModel = projectModel;
    }
    get name (): string {
        return this._projectModel.name;
    }

    get utilityTokenSymbol (): string {
        return this._projectModel.utilityTokenSymbol;
    }
    
}
Object.seal(ProjectModel);
export =  ProjectModel;