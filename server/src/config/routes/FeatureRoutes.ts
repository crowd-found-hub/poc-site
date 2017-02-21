/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import FeatureController = require("./../../controllers/FeatureController");

var router = express.Router();
class FeatureRoutes {
    private _featureController: FeatureController;

    constructor () {
        this._featureController = new FeatureController();
    }
    get routes () {
        var controller = this._featureController;

        router.get("/features", controller.retrieve);
        router.get("/projects/:_projectId/features/", controller.retrieveByProjectId);
        router.post("/features", controller.create);
        router.put("/features/:_id", controller.update);
        router.get("/features/:_id", controller.findById);
        router.delete("/features/:_id", controller.delete);

        return router;
    }


}

Object.seal(FeatureRoutes);
export = FeatureRoutes;