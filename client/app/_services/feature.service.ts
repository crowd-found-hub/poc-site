import {Injectable} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import {Feature} from "../_models/index";

@Injectable()
export class FeatureService {

    private featuresUrl = 'api/features';  // URL to web api

    constructor(private http: Http) { }

    getFeatures(): Promise<Feature[]> {
        return this.http.get(this.featuresUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getFeaturesByProjectId(projectId: string): Observable<Feature[]> {
        return this.http.get('api/projects/' + projectId + '/features/')
            .map((response: Response) => <Feature[]>response.json())
            .catch(this.handleObservableError);
    }

    getFeature(id: string) {
        return this.http.get(this.featuresUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(feature: Feature): Promise<Feature>  {
        if (feature._id) {
            return this.put(feature);
        }
        return this.post(feature);
    }

    private post(feature: Feature): Promise<Feature> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.featuresUrl, JSON.stringify(feature), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(feature: Feature) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.featuresUrl}/${feature._id}`;

        return this.http
            .put(url, JSON.stringify(feature), {headers: headers})
            .toPromise()
            .then(() => feature)
            .catch(this.handleError);
    }

    delete(feature: Feature) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.featuresUrl}/${feature._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private handleObservableError(error: Response) {
        console.log(error);
        let msg = `${error}`;
        console.error(msg);
        return Observable.throw(msg);
    }
}