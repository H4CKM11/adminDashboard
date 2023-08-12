import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTabletComponent } from './dashboard-tablet/dashboard-tablet.component';
import { NavbarTabletModule } from '../navbar-tablet/navbar-tablet.module';
import { DashboardMainContentTabletModule } from '../dashboard-main-content-tablet/dashboard-main-content-tablet.module';
import { FooterDesktopModule } from '../footer-desktop/footer-desktop.module';



@NgModule({
  declarations: [DashboardTabletComponent],
  imports: [
    CommonModule,
    NavbarTabletModule,
    DashboardMainContentTabletModule,
    FooterDesktopModule
  ],
  exports: [DashboardTabletComponent]
})
export class DashboardTabletModule { }
