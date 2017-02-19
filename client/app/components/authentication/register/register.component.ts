import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../../_services/index';

@Component({
    templateUrl: './app/components/authentication/register/register.component.html'
})

export class RegisterComponent {
    model: any = {};
    //loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        //this.loading = true;
        this.userService.save(this.model).subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                //this.loading = false;
            }
        );
    }
}