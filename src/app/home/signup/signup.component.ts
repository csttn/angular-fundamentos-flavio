import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorsService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router
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

  signup() {
    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.signUpService.signUp(newUser).subscribe({
      next: () => this.router.navigate(['']),
      error: (err) => console.log(err),
    });
  }
}
