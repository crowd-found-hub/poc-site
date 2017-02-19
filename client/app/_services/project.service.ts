import {Injectable} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';

import {Project} from "../_models/index";

@Injectable()
export class ProjectService {

    private projectsUrl = 'api/projects';  // URL to web api

    constructor(private http: Http) { }

    getProjects(): Promise<Project[]> {
        return this.http.get(this.projectsUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getProject(id: string) {
        return this.http.get(this.projectsUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(hero: Project): Promise<Project>  {
        if (hero._id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    private post(hero: Project): Promise<Project> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.projectsUrl, JSON.stringify(hero), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(hero: Project) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.projectsUrl}/${hero._id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(hero: Project) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.projectsUrl}/${hero._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}