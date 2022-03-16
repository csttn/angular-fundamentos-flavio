import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { IPhotoComment } from '../../photo/photo.comment';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId!: number;

  commentForm!: FormGroup;

  comments$ = new Observable<IPhotoComment[]>();

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }
}
