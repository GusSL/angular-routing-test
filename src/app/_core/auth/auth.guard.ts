import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserSubject.value;
        if (currentUser) {

            // Check if route has user role
            if(route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // Not authorized
                this.router.navigate(['/']);
                return false;
            }
            //Authorized
            return true;
        }

        //Not logged in
        this.router.navigate(['/login'], {queryParams: {return: state.url}});
        return false;
    }
}
