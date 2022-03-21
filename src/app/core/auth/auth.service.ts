import { UserService } from './../user/user.service';
import { tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

const API_URL = environment.Apiurl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authenticated(userName: string, password: string) {
    return this.httpClient
      .post(
        API_URL + '/user/login',
        {
          userName,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const authToken = response.headers.get('x-access-token');
          if (authToken) {
            this.userService.setToken(authToken);
          }
        })
      );
  }
}
