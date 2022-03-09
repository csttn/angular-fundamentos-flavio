import { SignUpComponent } from './home/signup/signup.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignInComponent } from './home/signin/signin.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosListResolver } from './photos/photos-list/photos-list.resolver';
import { HomeComponent } from './home/home.component';

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
    component: PhotosListComponent,
    resolve: {
      photos: PhotosListResolver,
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
