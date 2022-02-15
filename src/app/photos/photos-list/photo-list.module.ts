import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotosGridComponent } from './photos-grid/photos-grid.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosListComponent } from './photos-list.component';
import { NgModule } from '@angular/core';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PhotosListComponent,
    LoadButtonComponent,
    PhotosGridComponent,
    FilterByDescriptionPipe,
    SearchComponent,
  ],
  imports: [PhotoModule, CommonModule, CardModule, DarkenOnHoverModule],
  exports: [PhotosListComponent, LoadButtonComponent, PhotosGridComponent],
})
export class PhotosListModule {}
