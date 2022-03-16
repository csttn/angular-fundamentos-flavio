import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { DarkenOnHoverDirective } from './../../shared/directives/darken-on-hover/darken-on-hover.directive';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PhotoComponent],
  imports: [CommonModule, HttpClientModule, DarkenOnHoverModule],
  exports: [PhotoComponent, CommonModule],
})
export class PhotoModule {}
