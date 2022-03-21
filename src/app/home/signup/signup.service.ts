import { NewUser } from './new-user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

const API = environment.Apiurl;

@Injectable()
export class SignUpService {
  constructor(private httpClient: HttpClient) {}

  signUp(newUser: NewUser) {
    return this.httpClient.post(`${API}/user/signup`, newUser);
  }

  checkUserNameTaken(userName: string) {
    return this.httpClient.get(`${API}/user/exists/${userName}`);
  }
}
