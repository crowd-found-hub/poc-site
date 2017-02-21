import mongoose = require("mongoose");

interface FeatureModel extends mongoose.Document {
    projectId: string;
    name: string;
    description: string;
    isForkable: boolean;
    status: string;
    assignedTo: string;

    // not mapped fields
    pledgeTotal: number;
}

export = FeatureModel;