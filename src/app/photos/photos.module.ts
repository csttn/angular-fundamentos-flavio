import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosGridComponent } from './photos-list/photos-grid/photos-grid.component';
import { FormsModule } from '@angular/forms';
import { FilterByDescriptionPipe } from './photos-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photos-list/load-button/load-button.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotosListComponent,
    PhotoFormComponent,
    PhotosGridComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
  ],
  imports: [HttpClientModule, CommonModule, FormsModule],
  exports: [PhotosListComponent, PhotoFormComponent],
})
export class PhotosModule {}
