import { VMessageModule } from './../core/components/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule],
})
export class HomeModule {}
