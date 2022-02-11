import { PhotosGridComponent } from './photos-grid/photos-grid.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosListComponent } from './photos-list.component';
import { NgModule } from '@angular/core';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/core/components/card/card.module';

@NgModule({
  declarations: [
    PhotosListComponent,
    LoadButtonComponent,
    PhotosGridComponent,
    FilterByDescriptionPipe,
  ],
  imports: [PhotoModule, CommonModule, CardModule],
  exports: [PhotosListComponent, LoadButtonComponent, PhotosGridComponent],
})
export class PhotosListModule {}
