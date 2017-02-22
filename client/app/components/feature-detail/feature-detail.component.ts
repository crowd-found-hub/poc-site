import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Feature } from "../../_models/index";
import { FeatureService } from "../../_services/index";

@Component({
    selector: 'feature-detail',
    templateUrl: './app/components/feature-detail/feature-detail.component.html'
})

export class FeatureDetailComponent implements OnInit {
    @Input() feature: Feature;
    newFeature = false;
    error: any;
    editMode: boolean = false;

    constructor(
        private featureService: FeatureService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.feature = new Feature();
                this.feature.projectId = id;
                this.feature.isForkable = true;
                this.newFeature = true;
                this.editMode = true;
            } else {
                this.newFeature = false;
                this.featureService.getFeature(id)
                    .then(feature => this.feature = feature);
            }
        });
    }

    save() {
        this.featureService
            .save(this.feature)
            .then(feature => {
                this.feature = feature; // saved feature, w/ id if new
                this.cancel();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    cancel() {
        // reload from the db (change with copy in memory when first loaded);
        if (this.newFeature) {
            this.feature = new Feature();
        } else {
            this.featureService.getFeature(this.feature._id)
                .then(feature => this.feature = feature);
        }
        this.toggleEditMode();
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }
}