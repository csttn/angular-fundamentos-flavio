import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

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
        Validators.pattern(/^[a-z0-9_\-]+$/),
        Validators.minLength(2),
        Validators.maxLength(40),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(14)],
    ],
  });

  ngOnInit(): void {}
}
