import { CommonModule } from '@angular/common';
import { LoggedOnlDirective } from 'src/app/shared/directives/logged-only/logged-only.directve';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoggedOnlDirective],
  imports: [CommonModule],
  exports: [LoggedOnlDirective],
})
export class LoggedOnlyModule {}
