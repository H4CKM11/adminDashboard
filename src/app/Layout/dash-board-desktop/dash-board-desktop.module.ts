import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardDekstopComponent } from './dash-board-dekstop/dash-board-dekstop.component';
import { NavbarDesktopModule } from '../navbar-desktop/navbar-desktop.module';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [DashBoardDekstopComponent],
  imports: [
    CommonModule,
    NavbarDesktopModule,
    MatSidenavModule
  ],
  exports: [
    DashBoardDekstopComponent  ]
})
export class DashBoardDesktopModule { }
