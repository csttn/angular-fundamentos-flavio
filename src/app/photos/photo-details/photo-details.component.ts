import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from './../photo/photo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
  photo$!: Observable<IPhoto>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(photoId);
  }
}
