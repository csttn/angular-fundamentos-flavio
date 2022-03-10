import { IUser } from './../user/user.model';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  user$: Observable<IUser | null>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
  }

  ngOnInit() {}
}
