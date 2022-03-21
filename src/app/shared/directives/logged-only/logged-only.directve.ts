import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[loggedOnly]',
})
export class LoggedOnlDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      if (!this.userService.isLogged()) {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }
}
