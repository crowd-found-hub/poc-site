import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../_models/index";
import { ActivatedRoute, Params } from '@angular/router';
import {ProjectService} from "../../_services/index";

@Component({
    selector: 'project-detail',
    templateUrl: './app/components/projectDetail/project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
    @Input() project: Project;
    newProject = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newProject = true;
                this.project = new Project();
            } else {
                this.newProject = false;
                this.projectService.getProject(id)
                    .then(project => this.project = project);
            }
        });
    }

    save() {
        this.projectService
            .save(this.project)
            .then(project => {
                this.project = project; // saved project, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}