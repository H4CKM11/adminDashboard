import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthPricingChartTabletComponent } from './eth-pricing-chart-tablet/eth-pricing-chart-tablet.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [EthPricingChartTabletComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [EthPricingChartTabletComponent]
})
export class EthPricingChartTabletModule { }
