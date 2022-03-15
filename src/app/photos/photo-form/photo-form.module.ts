import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule,
  ],
  exports: [PhotoFormComponent],
})
export class PhotoFormModule {}
