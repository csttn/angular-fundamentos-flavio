import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IPhoto } from '../photo/photo.model';
import { PhotoService } from './../photo/photo.service';

@Injectable({
  providedIn: 'root',
})
export class PhotosListResolver implements Resolve<Observable<IPhoto[]>> {
  constructor(private photoService: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params['userName'];
    return this.photoService.listFromUserPaginated(userName, 1);
  }
}
