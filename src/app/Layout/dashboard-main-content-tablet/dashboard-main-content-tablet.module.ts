import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainContentTabletComponent } from './dashboard-main-content-tablet/dashboard-main-content-tablet.component';
import { MainCardFeatureDesktopModule } from '../main-card-feature-desktop/main-card-feature-desktop.module';
import { MainCardSubMobileModule } from '../main-card-sub-mobile/main-card-sub-mobile.module';
import { MainSubCardDesktopModule } from '../main-sub-card-desktop/main-sub-card-desktop.module';
import { MainSubCard2DesktopModule } from '../main-sub-card2-desktop/main-sub-card2-desktop.module';
import { EthPricingChartDesktopModule } from '../eth-pricing-chart-desktop/eth-pricing-chart-desktop.module';
import { FriendsActivityDesktopModule } from '../friends-activity-desktop/friends-activity-desktop.module';
import { EthPricingChartTabletModule } from '../eth-pricing-chart-tablet/eth-pricing-chart-tablet.module';



@NgModule({
  declarations: [DashboardMainContentTabletComponent],
  imports: [
    CommonModule,
    MainCardFeatureDesktopModule,
    MainSubCardDesktopModule,
    MainSubCard2DesktopModule,
    FriendsActivityDesktopModule,
    EthPricingChartTabletModule
  ],
  exports:[DashboardMainContentTabletComponent]
})
export class DashboardMainContentTabletModule { }
