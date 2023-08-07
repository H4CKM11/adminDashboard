import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDesktopComponent } from './navbar-desktop/navbar-desktop.component';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [NavbarDesktopComponent],
  imports: [
    CommonModule,
    MatIconModule,
    
  ],
  exports: [NavbarDesktopComponent]
})
export class NavbarDesktopModule { }
