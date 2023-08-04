import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule} from '@angular/material/icon'
import { NavBarMobileModule } from '../Layout/nav-bar-mobile/nav-bar-mobile.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NavBarMobileModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
