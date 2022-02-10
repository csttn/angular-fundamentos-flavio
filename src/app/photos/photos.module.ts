import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotosListModule } from './photos-list/photo-list.module';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule, PhotosListModule],
  exports: [],
})
export class PhotosModule {}
