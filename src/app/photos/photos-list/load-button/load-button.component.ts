import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss'],
})
export class LoadButtonComponent implements OnInit {
  constructor() {}

  @Input() hasMorePhotos: boolean = false;

  ngOnInit(): void {}
}
