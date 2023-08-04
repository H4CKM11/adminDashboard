import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardMobileComponent } from './dash-board-mobile/dash-board-mobile.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { MainCardFeatureMobileModule } from '../main-card-feature-mobile/main-card-feature-mobile.module';
import { MainCardSubMobileModule } from '../main-card-sub-mobile/main-card-sub-mobile.module';
import { MainCardSubMobile2Module } from '../main-card-sub-mobile2/main-card-sub-mobile2.module';
import { EthPricingChartMobileModule } from '../eth-pricing-chart-mobile/eth-pricing-chart-mobile.module';



@NgModule({
  declarations: [DashBoardMobileComponent],
  imports: [
    CommonModule,
    NavbarModule,
    MainCardFeatureMobileModule,
    MainCardSubMobileModule,
    MainCardSubMobile2Module,
    EthPricingChartMobileModule
  ],
  exports: [DashBoardMobileComponent]
})
export class DashBoardMobileModule { }
