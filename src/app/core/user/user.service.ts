import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from './user.model';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  private userSubject = new BehaviorSubject<IUser | null>(null);

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
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
