import { PlatformDetectorService } from './../../core/platform/platform-detector.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit {
  @ViewChild('userNameInput')
  userNameInput: ElementRef<HTMLInputElement> | undefined;

  loginForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.platformDetectService.isPlatformBrowser()
      ? this.userNameInput?.nativeElement.focus()
      : null;
  }

  handleSubmit() {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    this.authService.authenticated(userName, password).subscribe({
      next: (response) => {
        console.log('Successfully logged in', response);
        this.router.navigate(['user', userName]);
      },
      error: (err) => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetectService.isPlatformBrowser() &&
          this.userNameInput?.nativeElement.focus();
      },
    });
  }
}
