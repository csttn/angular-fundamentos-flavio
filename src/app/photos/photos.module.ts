import { PhotoFormModule } from './photo-form/photo-form.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotosListModule } from './photos-list/photo-list.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PhotosListModule, PhotoFormModule],
  exports: [],
})
export class PhotosModule {}
