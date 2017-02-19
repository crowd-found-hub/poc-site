/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IUserModel = require("./../../model/interfaces/UserModel");

interface UserBusiness extends BaseBusiness<IUserModel> {

}
export = UserBusiness;