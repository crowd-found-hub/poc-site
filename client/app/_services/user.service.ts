// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { User } from '../_models/user';

@Injectable()
export class UserService {

    private usersUrl = 'api/users';  // URL to web api

    constructor(private http: Http) { }

    getAll(): Observable<User[]> {
        return this.http.get(this.usersUrl, this.jwt())
            .map(response => response.json())
            .catch(this.handleError);
    }

    getById(id: string) {
        return this.http.get(this.usersUrl + '/' + id, this.jwt())
            .map(response => response.json())
            .catch(this.handleError);
    }

    save(user: User): Observable<User>  {
        if (user._id) {
            return this.put(user);
        }
        return this.post(user);
    }

    private post(user: User): Observable<User> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.usersUrl, JSON.stringify(user), {headers:headers})
            .map(response => response.json().data);
            //.catch(this.handleError);
    }

    private put(user: User) {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');

        let url = `${this.usersUrl}/${user._id}`;

        return this.http
            .put(url, JSON.stringify(user), this.jwt())
            .map(() => user)
            .catch(this.handleError);
    }

    delete(user: User) {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');

        let url = `${this.usersUrl}/${user._id}`;

        return this.http
            .delete(url, this.jwt())
            .toPromise()
            .catch(this.handleError);
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.message || error);
    }
}