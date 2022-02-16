import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  user$: Observable<IUser | null>;
  user: IUser | null | undefined;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
