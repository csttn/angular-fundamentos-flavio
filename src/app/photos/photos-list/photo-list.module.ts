import { PhotosGridComponent } from './photos-grid/photos-grid.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosListComponent } from './photos-list.component';
import { NgModule } from '@angular/core';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PhotosListComponent,
    LoadButtonComponent,
    PhotosGridComponent,
    FilterByDescriptionPipe,
  ],
  imports: [PhotoModule, CommonModule],
  exports: [PhotosListComponent, LoadButtonComponent, PhotosGridComponent],
})
export class PhotosListModule {}
