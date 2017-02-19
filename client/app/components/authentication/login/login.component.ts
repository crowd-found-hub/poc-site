import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, EventBrokerService } from '../../../_services/index';

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
        private eventBrokerService: EventBrokerService,
        private route: ActivatedRoute,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private router: Router) { }

    ngOnInit() {
        this.isLoggedIn = this.authenticationService.isLoggedIn();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit() {
        this.alertService.clear();
        this.authenticationService.login(this.model.username, this.model.password).subscribe((results) => {
            console.log('LoginComponent.onSubmit results', results);
            if (results) {
                this.router.navigate([this.returnUrl]);
                this.eventBrokerService.emit("my-event", null);
                this.isLoggedIn = this.authenticationService.isLoggedIn();
            } else {
                this.alertService.error("There is no user with the username and/or password you supplied");
            }
        });
    }
}