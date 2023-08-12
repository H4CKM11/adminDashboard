import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTabletComponent } from './navbar-tablet/navbar-tablet.component';



@NgModule({
  declarations: [NavbarTabletComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarTabletComponent]
})
export class NavbarTabletModule { }
