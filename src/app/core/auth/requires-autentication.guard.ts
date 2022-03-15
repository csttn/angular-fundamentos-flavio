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
export class RequiresAutenticationGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const url = state.url;
    const isAuthenticated = this.userService.isLogged();

    // rotas para autenticados
    const authenticatedRoutes = ['/p/add'];

    // validação de rotas para usuarios autenticados
    if (isAuthenticated) {
      const allowedAccessToAuthenticatedRoute =
        authenticatedRoutes.includes(url);

      if (!allowedAccessToAuthenticatedRoute) {
        this.router.navigate(['/user', this.userService.getUserName()]);
      }

      return allowedAccessToAuthenticatedRoute;
    }
    return false;
  }
}
