import { switchMap, tap } from 'rxjs/operators';
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

  saveComment() {
    const comment = String(this.commentForm.get('comment')?.value) as string;
    this.comments$ = this.photoService
      .addComment(this.photoId, comment) // após a execução do addComment, antes dele retornar, ele vai executar pipe com o switchMap executando o getComment busando os comentários atualizados e retornando os mesmos como um observable
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      // esse pipe serve para limpar o formulario depois de gravar e buscar os novos comentários
      .pipe(
        tap(() => {
          this.commentForm.reset();
        })
      );
  }
}
