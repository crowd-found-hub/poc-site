/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import ProjectRepository = require("./../repository/ProjectRepository");
import IProjectBusiness = require("./interfaces/ProjectBusiness");
import IProjectModel = require("./../model/interfaces/ProjectModel");
import ProjectModel = require("./../model/ProjectModel");


class ProjectBusiness implements IProjectBusiness {
    private _projectRepository: ProjectRepository;

    constructor () {
        this._projectRepository = new ProjectRepository();
    }

    create (item: IProjectModel, callback: (error: any, result: any) => void) {
        this._projectRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._projectRepository.retrieve(callback);
    }

    update (_id: string, item: IProjectModel, callback: (error: any, result: any) => void) {

        this._projectRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._projectRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._projectRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IProjectModel) => void) {
        this._projectRepository.findById(_id, callback);
    }

}


Object.seal(ProjectBusiness);
export = ProjectBusiness;