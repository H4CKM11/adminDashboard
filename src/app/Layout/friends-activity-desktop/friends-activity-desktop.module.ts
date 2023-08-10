import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsActivityDesktopComponent } from './friends-activity-desktop/friends-activity-desktop.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [FriendsActivityDesktopComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [FriendsActivityDesktopComponent]
})
export class FriendsActivityDesktopModule { }
