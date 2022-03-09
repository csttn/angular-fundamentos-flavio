import { HomeComponent } from './home.component';
import { SignUpComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
