/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IProjectModel = require("./../../model/interfaces/ProjectModel");

interface ProjectBusiness extends BaseBusiness<IProjectModel> {

}
export = ProjectBusiness;