import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardMobileComponent } from './dash-board-mobile/dash-board-mobile.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';



@NgModule({
  declarations: [DashBoardMobileComponent],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [DashBoardMobileComponent]
})
export class DashBoardMobileModule { }
