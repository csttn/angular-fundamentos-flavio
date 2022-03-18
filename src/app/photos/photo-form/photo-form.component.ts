import { PhotoService } from './../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss'],
})
export class PhotoFormComponent implements OnInit {
  uploadForm: FormGroup = this.formBuilder.group({
    file: [null, [Validators.required]],
    description: ['', [Validators.maxLength(300), Validators.required]],
    allowComments: [true],
  });

  file: File | null = null;
  preview: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  upload() {
    const description = this.uploadForm.get('description')?.value;
    const allowComments = this.uploadForm.get('allowComments')?.value;

    if (this.file) {
      this.photoService
        .upload(description, allowComments, this.file)
        .subscribe({
          next: () => {
            this.alertService.success(`Uploaded with success!`, true);
            this.router.navigate(['/user', this.userService.getUserName()]);
          },
          error: () => {
            this.alertService.error(`Upload failed!`);
          },
        });
    }
  }

  onChangeFile(target: any) {
    if (target instanceof EventTarget) {
      let element = target as HTMLInputElement;
      let files = element.files;
      if (files) {
        this.file = files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.preview = e.target.result;
        };
        reader.readAsDataURL(this.file);
      }
    }
  }
}
