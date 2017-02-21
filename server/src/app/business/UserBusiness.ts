import UserRepository = require("./../repository/UserRepository");
import IUserBusiness = require("./interfaces/UserBusiness");
import IUserModel = require("./../model/interfaces/UserModel");
import UserModel = require("./../model/UserModel");


class UserBusiness implements IUserBusiness {
    private _userRepository: UserRepository;

    constructor () {
        this._userRepository = new UserRepository();
    }

    create (item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._userRepository.retrieve(callback);
    }

    update (_id: string, item: IUserModel, callback: (error: any, result: any) => void) {

        this._userRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._userRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._userRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.findById(_id, callback);
    }

    findByUsernameAndPassword (username: string, password: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.retrieveByUsernameAndPassword(username, password, (err, res) => {
            if (err) callback(err, res);
            else {
                if (res.length == 0) {
                    callback(err, res);
                } else {
                    res[0].password = undefined;
                    res.push({auth_token: 'fake jwt auth token'})
                    callback(err, res);
                }
            }
        });
    }

}


Object.seal(UserBusiness);
export = UserBusiness;