import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  user$: Observable<IUser | null>;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
  }
}
