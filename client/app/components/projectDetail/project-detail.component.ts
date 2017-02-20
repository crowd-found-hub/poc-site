import { Component, Input, OnInit } from '@angular/core';
import { Project } from "../../_models/index";
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from "../../_services/index";

@Component({
    selector: 'project-detail',
    templateUrl: './app/components/projectDetail/project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
    @Input() project: Project;
    newProject = false;
    error: any;
    navigated = false; // true if navigated here
    editMode: boolean = false;

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
                this.cancel();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    cancel() {
        // reload from the db (change with copy in memory when first loaded);
        if (this.newProject) {
            this.project = new Project();
        } else {
            this.projectService.getProject(this.project._id)
                .then(project => this.project = project);
        }
        this.toggleEditMode();
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }
}