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
  user$!: Observable<IUser | null>;

  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }
}
