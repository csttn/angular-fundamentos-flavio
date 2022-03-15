import { PlatformDetectorService } from './../../../core/platform/platform-detector.service';
import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[immediateClick]',
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private platformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.platformDetector.isPlatformBrowser() &&
      this.element.nativeElement.click();
  }
}
