import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, RouterModule],
  exports: [AlertComponent],
})
export class AlertModule {}
