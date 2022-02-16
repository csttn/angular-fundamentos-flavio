import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from './user.model';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  private userSubject = new Subject<IUser>();

  private _user = '';

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  getToken() {
    return this.tokenService.getToken();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  decodeAndNotify() {
    const token = this.getToken();
    if (token) {
      const user = jwt_decode(token) as IUser;
      this.userSubject.next(user);
    }
  }
}
