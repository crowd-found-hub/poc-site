import express = require("express");
import ProjectController = require("./../../controllers/ProjectController");

var router = express.Router();
class ProjectRoutes {
    private _projectController: ProjectController;

    constructor () {
        this._projectController = new ProjectController();
    }
    get routes () {
        var controller = this._projectController;

        router.get("/projects", controller.retrieve);
        router.post("/projects", controller.create);
        router.put("/projects/:_id", controller.update);
        router.get("/projects/:_id", controller.findById);
        router.delete("/projects/:_id", controller.delete);

        return router;
    }


}

Object.seal(ProjectRoutes);
export = ProjectRoutes;