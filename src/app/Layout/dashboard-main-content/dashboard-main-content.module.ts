import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardFeatureDesktopModule } from '../main-card-feature-desktop/main-card-feature-desktop.module';
import { MainSubCardDesktopModule } from '../main-sub-card-desktop/main-sub-card-desktop.module';
import { MainSubCard2DesktopModule } from '../main-sub-card2-desktop/main-sub-card2-desktop.module';
import { DashboardMainContentComponent } from './desktop-main-content/dashboard-main-content.component';
import { EthPricingChartDesktopModule } from '../eth-pricing-chart-desktop/eth-pricing-chart-desktop.module';
import { FriendsActivityDesktopModule } from '../friends-activity-desktop/friends-activity-desktop.module';



@NgModule({
  declarations: [DashboardMainContentComponent],
  imports: [
    CommonModule,
    MainCardFeatureDesktopModule,
    MainSubCardDesktopModule,
    MainSubCard2DesktopModule,
    EthPricingChartDesktopModule,
    FriendsActivityDesktopModule
  ],
  exports: [DashboardMainContentComponent]
})
export class DashboardMainContentModule { }
