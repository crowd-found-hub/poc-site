import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../../_services/index';

@Component({
    selector: 'login',
    templateUrl: './app/components/authentication/login/login.component.html'
})
export class LoginComponent {

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private router: Router) { }

    onSubmit(email: string, password: string) {
        this.loading = true;
        this.authenticationService.login(email, password).subscribe((results) => {
            if (results) {
                this.router.navigate(['']);
            }
        });
    }
}