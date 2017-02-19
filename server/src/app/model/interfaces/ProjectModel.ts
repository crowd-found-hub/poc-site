import mongoose = require("mongoose");

interface ProjectModel extends mongoose.Document {
    name: string;
    utilityTokenSymbol: string;
}

export = ProjectModel;