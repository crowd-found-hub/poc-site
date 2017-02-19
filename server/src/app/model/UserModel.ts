/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IUserModel = require('./interfaces/UserModel');

class UserModel {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }
    get username (): string {
        return this._userModel.username;
    }

    get password (): string {
        return this._userModel.password;
    }

    get firstName (): string {
        return this._userModel.firstName;
    }

    get lastName (): string {
        return this._userModel.lastName;
    }
    
}
Object.seal(UserModel);
export =  UserModel;