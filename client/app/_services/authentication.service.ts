import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(username, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("AuthenticationService.login values:", username, password);
    return this.http
      .post('api/login', JSON.stringify({ username, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        console.log(res);
        if (res[1]) {
          localStorage.setItem('auth_token', res[1].auth_token);
          this.loggedIn = true;
          return true;
        }
        console.log('AuthenticationService loggedIn', this.loggedIn);
        return false;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}