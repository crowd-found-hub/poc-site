/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import FeatureBusiness = require("./../app/business/FeatureBusiness");
import IBaseController = require("./BaseController");
import IFeatureModel = require("./../app/model/interfaces/FeatureModel");

class FeatureController implements IBaseController <FeatureBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var feature: IFeatureModel = <IFeatureModel>req.body;
            var featureBusiness = new FeatureBusiness();
            featureBusiness.create(feature, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var feature: IFeatureModel = <IFeatureModel>req.body;
            var _id: string = req.params._id;
            var featureBusiness = new FeatureBusiness();
            featureBusiness.update(_id, feature, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var featureBusiness = new FeatureBusiness();
            featureBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var featureBusiness = new FeatureBusiness();
            featureBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieveByProjectId(req: express.Request, res: express.Response): void {
        try {
            console.log('retrieveByProjectId - got here');
            var _projectId: string = req.params._projectId;
            var featureBusiness = new FeatureBusiness();
            featureBusiness.retrieveByProjectId(_projectId, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var featureBusiness = new FeatureBusiness();
            featureBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = FeatureController;