import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TokenService } from './token/token.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule],
  providers: [TokenService],
  exports: [HeaderComponent],
})
export class CoreModule {}
