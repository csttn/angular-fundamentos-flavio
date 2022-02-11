import { debounceTime } from 'rxjs/operators';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor() {}

  filter: string = '';

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';

  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce.next(this.filter);
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  onKeyUp(event: KeyboardEvent) {
    let element = event.target as HTMLInputElement;
    this.debounce.next(element.value);
  }
}
