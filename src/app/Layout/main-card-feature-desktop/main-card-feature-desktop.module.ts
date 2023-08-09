import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardFeatureDesktopComponent } from './main-card-feature/main-card-feature-desktop.component';



@NgModule({
  declarations: [MainCardFeatureDesktopComponent],
  imports: [
    CommonModule
  ],
  exports : [
    MainCardFeatureDesktopComponent
  ]
})
export class MainCardFeatureDesktopModule { }
