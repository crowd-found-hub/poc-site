import { Component, OnInit } from '@angular/core';

import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
    selector: 'login',
    templateUrl: './app/components/profile/project-tokens/project-tokens.component.html'
})
export class UserSettingsComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(user: User) {
        this.userService
            .delete(user)
            .then(res => {
                this.loadAllUsers();
            });
            //.catch(error => this.error = error);
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}