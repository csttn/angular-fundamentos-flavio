import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PhotoComponent],
  imports: [CommonModule],
  exports: [PhotoComponent, CommonModule],
})
export class PhotoModule {}
