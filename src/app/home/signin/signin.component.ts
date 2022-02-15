import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  loginForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  handleSubmit() {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    this.authService.authenticated(userName, password).subscribe({
      next: (response) => {
        console.log(response);
        console.log('Successfully logged in');
      },
      error: (err) => {
        console.log(err);
        this.loginForm.reset();
      },
    });
  }
}
