import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Project} from "../../_models/index";
import {ProjectService} from "../../_services/index";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    projects: Project[] = [];

    constructor(
        private router: Router,
        private projectService: ProjectService) {
    }

    ngOnInit() {
        this.projectService.getProjects()
            .then(projects => this.projects = projects);
    }

    gotoDetail(project: Project) {
        let link = ['/projects', project._id];
        this.router.navigate(link);
    }
}