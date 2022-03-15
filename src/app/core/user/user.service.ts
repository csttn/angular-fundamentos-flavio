import { TokenService } from './../token/token.service';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from './user.model';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }
  private userSubject = new BehaviorSubject<IUser | null>(null);
  userName: string = '';

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

  isLogged() {
    return this.tokenService.hasToken();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  getUserName() {
    return this.userName;
  }

  decodeAndNotify() {
    const token = this.getToken();
    if (token) {
      const user = jwt_decode(token) as IUser;
      this.userName = user.name;
      this.userSubject.next(user);
    }
  }
}
