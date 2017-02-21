export class Feature {
    _id: string;
    projectId: string;
    name: string;
    description: string;
    isForkable: boolean;
    status: string;
    assignedTo: string;

    // non-db fields
    pledgeTotal: number;
}