import { AbstractControl } from '@angular/forms';
import { UserService } from './../../core/user/user.service';
import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

debounceTime;

@Injectable({
  providedIn: 'root',
})
export class UserNotTakenValidatorService {
  constructor(
    private userService: UserService,
    private signUpService: SignUpService
  ) {}

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((userName) =>
            this.signUpService.checkUserNameTaken(userName)
          )
        )
        .pipe(map((isTaken) => (isTaken ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}
