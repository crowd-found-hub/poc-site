import UserModel = require("./../model/UserModel");
import IUserModel = require("./../model/interfaces/UserModel");
import UserSchema = require("./../dataAccess/schemas/UserSchema");
import RepositoryBase = require("./BaseRepository");

import mongoose = require("mongoose");

class UserRepository  extends RepositoryBase<IUserModel> {

    private _userSchema: mongoose.Model<mongoose.Document>;

    constructor () {
        super(UserSchema);
        this._userSchema = UserSchema;
    }

    retrieveByUsernameAndPassword (username: string, password: string, callback: (error: any, result: any) => void) {
        this._userSchema.find({'username': username, 'password': password}, callback)
    }
}

Object.seal(UserRepository);
export = UserRepository;