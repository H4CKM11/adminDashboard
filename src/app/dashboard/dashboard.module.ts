import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashBoardMobileModule } from '../Layout/dash-board-mobile/dash-board-mobile.module';
import { DashBoardDesktopModule } from '../Layout/dash-board-desktop/dash-board-desktop.module';
import { DashboardTabletModule } from '../Layout/dashboard-tablet/dashboard-tablet.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashBoardMobileModule,
    DashBoardDesktopModule,
    DashboardTabletModule  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
