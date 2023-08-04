import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.css'],
  animations: [
    trigger('slideInOut', [
      state('true', style({ transform: 'translateX(0)', opacity: 1 })),
      state('false', style({ transform: 'translateX(-100%)', opacity: 0 })),
      transition('true <=> false', animate('300ms ease-in-out')),
    ]),
  ],
})
export class NavBarMobileComponent {
  isMobileOpen = false;

  toggleMobileMenu()
  {
    this.isMobileOpen = !this.isMobileOpen;
  }
}
