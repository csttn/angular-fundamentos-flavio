import { map, Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from './../photo/photo.model';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {
  photo$!: Observable<IPhoto>;
  photoId!: number;

  likes$!: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
    this.likes$ = this.photo$.pipe(map((p) => p.likes));
    this.photo$.subscribe({
      error: () => {
        this.router.navigate(['not-found']);
      },
    });
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe({
      next: () => {
        this.alertService.success('Photo removed!', true);
        this.router.navigate(['/user', this.userService.getUserName()]);
      },
      error: (err) => {
        this.alertService.warning('Could not delete the photo!');
      },
    });
  }

  AddLike(photo: IPhoto) {
    this.photoService.addLike(photo.id).subscribe({
      next: (liked) => {
        if (liked) {
          this.likes$ = this.photoService
            .findById(photo.id)
            .pipe(map((p) => p.likes));
        } else {
          this.alertService.error('Não é possível curtir a foto duas vezes!');
        }
      },
      error: (err) => {
        this.alertService.error('erro inesperado ao curtir a foto!');
      },
    });
  }
}
