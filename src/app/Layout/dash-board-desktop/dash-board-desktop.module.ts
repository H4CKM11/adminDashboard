import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardDekstopComponent } from './dash-board-dekstop/dash-board-dekstop.component';
import { NavbarDesktopModule } from '../navbar-desktop/navbar-desktop.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SubNavbarDesktopModule } from '../sub-navbar-desktop/sub-navbar-desktop.module';
import { MainCardFeatureDesktopModule } from '../main-card-feature-desktop/main-card-feature-desktop.module';



@NgModule({
  declarations: [DashBoardDekstopComponent],
  imports: [
    CommonModule,
    NavbarDesktopModule,
    MatSidenavModule,
    SubNavbarDesktopModule,
    MainCardFeatureDesktopModule
  ],
  exports: [
    DashBoardDekstopComponent  ]
})
export class DashBoardDesktopModule { }
