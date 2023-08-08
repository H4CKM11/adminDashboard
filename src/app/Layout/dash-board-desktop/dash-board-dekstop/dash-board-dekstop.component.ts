import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-dash-board-dekstop',
  templateUrl: './dash-board-dekstop.component.html',
  styleUrls: ['./dash-board-dekstop.component.css']
})
export class DashBoardDekstopComponent {

  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
