import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../../_services/index';

//http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial

@Component({
    selector: 'login',
    templateUrl: './app/components/authentication/login/login.component.html'
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;
    isLoggedIn: boolean;

    constructor(
        private route: ActivatedRoute,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private router: Router) { }

    ngOnInit() {
        this.isLoggedIn = this.authenticationService.isLoggedIn();
    }

    onSubmit() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password).subscribe((results) => {
            if (results) {
                this.router.navigate(['']);
            }
            this.isLoggedIn = this.authenticationService.isLoggedIn();
        });
    }

    logOut() {
        this.authenticationService.logout();
        this.isLoggedIn = this.authenticationService.isLoggedIn();
    }
}