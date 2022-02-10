import { PhotoService } from './../photo/photo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPhoto } from '../photo/photo.model';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  photos: IPhoto[] = [];
  public filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMorePhotos: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  ngOnInit(): void {
    this.debounce.next(this.filter);
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => (this.filter = filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  onKeyUp(event: KeyboardEvent) {
    let element = event.target as HTMLInputElement;
    this.debounce.next(element.value);
  }

  loadMorePhotos() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.photos = this.photos.concat(photos);
        if (photos.length > 11) {
          this.hasMorePhotos = true;
        }
        this.hasMorePhotos = false;
      });
  }
}
