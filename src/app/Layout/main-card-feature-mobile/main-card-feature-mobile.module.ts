import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardFeatureMobileComponent } from './main-card-feature-mobile/main-card-feature-mobile.component';



@NgModule({
  declarations: [MainCardFeatureMobileComponent],
  imports: [
    CommonModule
  ],
  exports:[MainCardFeatureMobileComponent]
})
export class MainCardFeatureMobileModule { }
