import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directve';
import { LoggedOnlDirective } from 'src/app/shared/directives/logged-only/logged-only.directve';
import { LoggedOnlyModule } from 'src/app/shared/directives/logged-only/logged-only.module';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective,
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
    LoggedOnlyModule,
  ],
  exports: [PhotoDetailsComponent],
})
export class PhotoDetailsModule {
  constructor() {}
}
