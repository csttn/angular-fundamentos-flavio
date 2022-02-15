import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  authenticated(userName: string, password: string) {
    return this.httpClient.post(API_URL + '/user/login', {
      userName,
      password,
    });
  }
}
