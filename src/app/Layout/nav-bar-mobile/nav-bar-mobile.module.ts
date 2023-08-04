import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarMobileComponent } from './nav-bar-mobile/nav-bar-mobile.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [NavBarMobileComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[NavBarMobileComponent]
})
export class NavBarMobileModule { }
