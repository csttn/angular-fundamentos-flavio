import { NotAutenticationGuard } from './not-autentication.guard';
import { RequiresAutenticationGuard } from './requires-autentication.guard';
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

    // rotas publicas
    const publicRoutes = ['user', 'p/1'];

    const userPublicRouteVerify = url.split('/')[1];

    // verificando rotas publicas
    if (publicRoutes.includes(userPublicRouteVerify)) {
      return true;
    }

    // validação de rotas para usuarios não autenticados
    if (!isAuthenticated) {
      const notAutenticationGuard = new NotAutenticationGuard(
        this.userService,
        this.router
      );

      return notAutenticationGuard.canActivate(route, state);
    }

    // validação de rotas para usuarios autenticados
    if (isAuthenticated) {
      const requiresAutenticationGuard = new RequiresAutenticationGuard(
        this.userService,
        this.router
      );

      return requiresAutenticationGuard.canActivate(route, state);
    }
    return false;
  }
}
