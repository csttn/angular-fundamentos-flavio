import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImmediateClickDirective } from './immetiate-click.directive';

@NgModule({
  imports: [CommonModule],
  exports: [ImmediateClickDirective],
  declarations: [ImmediateClickDirective],
  providers: [],
})
export class ImmediateClickModule {}
