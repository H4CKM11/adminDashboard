import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthPricingChartMobileComponent } from './eth-pricing-chart-mobile/eth-pricing-chart-mobile.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [EthPricingChartMobileComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[EthPricingChartMobileComponent]
})
export class EthPricingChartMobileModule { }
