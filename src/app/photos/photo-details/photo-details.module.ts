import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
  ],
  exports: [PhotoDetailsComponent],
})
export class PhotoDetailsModule {
  constructor() {}
}
