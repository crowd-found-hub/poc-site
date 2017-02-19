import { Component, OnInit, OnDestroy } from '@angular/core';

import {AuthenticationService, EventBrokerService} from '../../../_services/index';
import {IEventListener} from '../../../_services/event-broker/interfaces/event-listener';

@Component({
    selector: 'login-nav',
    templateUrl: './app/components/_common/login-nav/login-nav.component.html'
})
export class LoginNavComponent implements OnInit, OnDestroy {

    title: string = "Crowd Found Hub";
    myEventListener: IEventListener;

    isLoggedIn: boolean;

    constructor(
        private authenticationService: AuthenticationService,
        private eventBrokerService: EventBrokerService
    ) {}

    ngOnInit() {
        this.myEventListener = this.eventBrokerService.listen( "my-event" , () => {
            this.isLoggedIn = this.authenticationService.isLoggedIn();
        });
        this.isLoggedIn = this.authenticationService.isLoggedIn();
    }

    ngOnDestroy() {
        this.myEventListener.ignore();
    }

    logout() {
        this.authenticationService.logout();
        this.isLoggedIn = this.authenticationService.isLoggedIn();
    }
}