import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosListResolver } from './photos/photos-list/photos-list.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'user/:userName',
    pathMatch: 'full',
    component: PhotosListComponent,
    resolve: {
      photos: PhotosListResolver,
    },
    data: {
      title: 'Timeline',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Photo upload',
    },
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailsComponent,
    data: {
      title: 'Photo details',
    },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not found',
    },
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
