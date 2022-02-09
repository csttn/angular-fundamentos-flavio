import { PhotoService } from './../photo/photo.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IPhoto } from '../photo/photo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent implements OnInit, OnChanges {
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  photos: IPhoto[] = [];

  public filter: string = '';

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.paramMap.get('userName');

    if (userName) {
      this.photoService.listFromUSer(userName).subscribe({
        next: (photos) => (this.photos = photos),
        error: (err) => this.router.navigate(['not-found']),
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
