import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.scss'],
})
export class VMessageComponent implements OnInit {
  constructor() {}

  @Input() message: string = '';

  ngOnInit(): void {}
}
