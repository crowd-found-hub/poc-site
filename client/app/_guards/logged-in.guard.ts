import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var isLoggedIn = this.authenticationService.isLoggedIn();
    if (isLoggedIn) {
      return true;
    }

    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}