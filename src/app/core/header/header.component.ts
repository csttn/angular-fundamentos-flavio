import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  user$: Observable<IUser | null> | undefined;

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
