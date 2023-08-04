import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashBoardMobileModule } from '../Layout/dash-board-mobile/dash-board-mobile.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashBoardMobileModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
