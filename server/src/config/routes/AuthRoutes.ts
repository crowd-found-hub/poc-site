import express = require("express");
import UserController = require("./../../controllers/UserController");

var router = express.Router();
class AuthRoutes {
    private _userController: UserController;

    constructor () {
        this._userController = new UserController();
    }
    get routes () {
        var controller = this._userController;

        router.post("/login", controller.login);

        return router;
    }


}

Object.seal(AuthRoutes);
export = AuthRoutes;