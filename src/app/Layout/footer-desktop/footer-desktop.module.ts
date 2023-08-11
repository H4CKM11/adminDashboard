import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterDesktopComponent } from './footer-desktop/footer-desktop.component';



@NgModule({
  declarations: [FooterDesktopComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterDesktopComponent]
})
export class FooterDesktopModule { }
