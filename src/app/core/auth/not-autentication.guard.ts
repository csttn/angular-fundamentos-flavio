import { ignoreElements, Observable } from 'rxjs';
import { UserService } from '../user/user.service';
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
export class NotAutenticationGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const url = state.url;
    const isAuthenticated = this.userService.isLogged();

    const notAuthenticatedRoutes = ['/home', '/signup'];

    // validação de rotas para usuarios não autenticados
    if (!isAuthenticated) {
      const allowedAccessUnauthenticatedRoute =
        notAuthenticatedRoutes.includes(url);

      if (!allowedAccessUnauthenticatedRoute) {
        this.router.navigate(['/']);
      }
      return allowedAccessUnauthenticatedRoute;
    }
    return false;
  }
}
