import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  user$: Observable<IUser | null>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
