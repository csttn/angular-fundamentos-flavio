import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IPhoto } from '../../photo/photo.model';

@Component({
  selector: 'ap-photos-grid',
  templateUrl: './photos-grid.component.html',
  styleUrls: ['./photos-grid.component.scss'],
})
export class PhotosGridComponent implements OnChanges {
  constructor() {}

  @Input() photos: IPhoto[] = [];

  rows: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['photos'].currentValue) {
      this.rows = this.groupColumns(this.photos, 3);
    }
  }

  groupColumns(photos: IPhoto[], columnNumber: number) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += columnNumber) {
      newRows.push(photos.slice(index, index + columnNumber));
    }

    return newRows;
  }
}
