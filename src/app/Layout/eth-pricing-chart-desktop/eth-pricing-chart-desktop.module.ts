import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthPricingChartDesktopComponent } from './eth-pricing-chart-desktop/eth-pricing-chart-desktop.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [EthPricingChartDesktopComponent],
  imports: [
    CommonModule,
    MatIconModule  ],
  exports: [EthPricingChartDesktopComponent]
})
export class EthPricingChartDesktopModule { }
