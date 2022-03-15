import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]',
})
export class DarkenOnHoverDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(this.el.nativeElement, 'transition', 'all 0.5s');
  }

  @Input() brightness = '0.7';

  @HostListener('mouseover') onMouseOver() {
    this.darken(this.el.nativeElement);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.lighten(this.el.nativeElement);
  }
  private darken(nativeElement: HTMLElement) {
    this.render.setStyle(
      nativeElement,
      'filter',
      `brightness(${this.brightness})`
    );
  }
  private lighten(nativeElement: HTMLElement) {
    this.render.setStyle(nativeElement, 'filter', `brightness(100%)`);
  }
}
