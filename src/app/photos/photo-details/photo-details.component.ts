import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from './../photo/photo.model';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {
  photo$!: Observable<IPhoto>;
  photoId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe({
      next: () => {
        this.alertService.success('Photo removed!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.alertService.warning('Could not delete the photo!');
      },
    });
  }
}
