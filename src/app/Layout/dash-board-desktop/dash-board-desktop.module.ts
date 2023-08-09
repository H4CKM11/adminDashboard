import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardDekstopComponent } from './dash-board-dekstop/dash-board-dekstop.component';
import { NavbarDesktopModule } from '../navbar-desktop/navbar-desktop.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SubNavbarDesktopModule } from '../sub-navbar-desktop/sub-navbar-desktop.module';
import { MainCardFeatureDesktopModule } from '../main-card-feature-desktop/main-card-feature-desktop.module';
import { MainSubCardDesktopModule } from '../main-sub-card-desktop/main-sub-card-desktop.module';
import { MainCardSubMobile2Component } from '../main-card-sub-mobile2/main-card-sub-mobile2/main-card-sub-mobile2.component';
import { MainCardSubMobile2Module } from '../main-card-sub-mobile2/main-card-sub-mobile2.module';
import { MainSubCard2DesktopModule } from '../main-sub-card2-desktop/main-sub-card2-desktop.module';



@NgModule({
  declarations: [DashBoardDekstopComponent],
  imports: [
    CommonModule,
    NavbarDesktopModule,
    MatSidenavModule,
    SubNavbarDesktopModule,
    MainCardFeatureDesktopModule,
    MainSubCardDesktopModule,
    MainSubCard2DesktopModule
  ],
  exports: [
    DashBoardDekstopComponent  ]
})
export class DashBoardDesktopModule { }
