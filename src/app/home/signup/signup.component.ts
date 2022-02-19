import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorsService: UserNotTakenValidatorService
  ) {}

  ngOnInit(): void {}

  signUpForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    fullName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(40)],
    ],
    userName: [
      '',
      [
        Validators.required,
        lowerCaseValidator,
        Validators.minLength(2),
        Validators.maxLength(40),
      ],
      this.userNotTakenValidatorsService.checkUserNameTaken(),
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(14)],
    ],
  });
}
