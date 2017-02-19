import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from '../../_services/index';
import { Project } from '../../_models/project';

@Component({
    selector: 'projects-list',
    templateUrl: './app/components/projects/projects.component.html'
})
export class ProjectsComponent implements OnInit {

    projects: Project[];
    selectedProject: Project;
    error: any;

    constructor(
        private router: Router,
        private projectService: ProjectService) { }

    getProjects() {
        this.projectService.getProjects().then(projects => this.projects = projects);
    }

    ngOnInit() {
        this.getProjects();
    }

    onSelect(project: Project) { this.selectedProject = project; }

    gotoDetail() {
        this.router.navigate(['/projects', this.selectedProject._id]);
    }

    addHero() {
        this.selectedProject = null;
        this.router.navigate(['/detail', 'new']);
    }
}