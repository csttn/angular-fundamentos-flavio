import { NewUser } from './new-user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable()
export class SignUpService {
  constructor(private httpClient: HttpClient) {}

  signUp(newUser: NewUser) {
    return this.httpClient.post(`${API_URL}/user/signup`, newUser);
  }

  checkUserNameTaken(userName: string) {
    return this.httpClient.get(`${API_URL}/user/exists/${userName}`);
  }
}
