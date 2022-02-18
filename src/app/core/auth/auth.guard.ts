import { ignoreElements, Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const url = state.url;
    const isAuthenticated = this.userService.isLogged();

    const authenticatedRoutes = [
      `/user/${this.userService.getUserName()}`,
      '/p/add',
    ];

    const notAuthenticatedRoutes = ['/'];

    // if (!isAuthenticated) {
    //   const allowedAccessUnauthenticatedRoute =
    //     notAuthenticatedRoutes.includes(url);

    //   if (!allowedAccessUnauthenticatedRoute) {
    //     this.router.navigate(['/']);
    //   }
    //   return allowedAccessUnauthenticatedRoute;
    // }

    if (isAuthenticated) {
      const allowedAccessToAuthenticatedRoute =
        authenticatedRoutes.includes(url);

      if (!allowedAccessToAuthenticatedRoute) {
        this.router.navigate(['/user', this.userService.getUserName()]);
      }

      return allowedAccessToAuthenticatedRoute;
    }
    return true;
  }
}
