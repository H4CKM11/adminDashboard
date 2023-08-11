import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardDekstopComponent } from './dash-board-dekstop/dash-board-dekstop.component';
import { NavbarDesktopModule } from '../navbar-desktop/navbar-desktop.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SubNavbarDesktopModule } from '../sub-navbar-desktop/sub-navbar-desktop.module';
import { MainCardFeatureDesktopModule } from '../main-card-feature-desktop/main-card-feature-desktop.module';
import { MainSubCardDesktopModule } from '../main-sub-card-desktop/main-sub-card-desktop.module';
import { MainSubCard2DesktopModule } from '../main-sub-card2-desktop/main-sub-card2-desktop.module';
import { EthPricingChartDesktopModule } from '../eth-pricing-chart-desktop/eth-pricing-chart-desktop.module';
import { FriendsActivityDesktopModule } from '../friends-activity-desktop/friends-activity-desktop.module';
import { FooterDesktopModule } from '../footer-desktop/footer-desktop.module';
import { DashboardMainContentModule } from '../dashboard-main-content/dashboard-main-content.module';



@NgModule({
  declarations: [DashBoardDekstopComponent],
  imports: [
    CommonModule,
    NavbarDesktopModule,
    MatSidenavModule,
    SubNavbarDesktopModule,
    MainCardFeatureDesktopModule,
    MainSubCardDesktopModule,
    MainSubCard2DesktopModule,
    EthPricingChartDesktopModule,
    FriendsActivityDesktopModule,
    FooterDesktopModule,
    DashboardMainContentModule
  ],
  exports: [
    DashBoardDekstopComponent  ]
})
export class DashBoardDesktopModule { }
