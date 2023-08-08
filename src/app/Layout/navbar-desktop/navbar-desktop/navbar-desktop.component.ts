import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';



@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({  width:'5rem' })),
      state('out', style({  width:'20rem' })),
      transition('in => out', animate('0.3s ease-in-out')),
      transition('out => in', animate('0.3s ease-in-out'))
    ]),
    trigger('fade', [
      state('in', style({
        opacity: 0
      })),
      state('out',   style({
        opacity: 1
      })),
      transition('in => out', animate('0.6s ease-in-out')),
      transition('out => in', animate('0.0s ease-in-out'))
    ]),
    trigger('shiftToLeft', [
      state('in', style({ transform: 'translateX(-8rem) rotate(180deg)', marginRight: '-7rem' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in <=> out', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class NavbarDesktopComponent {

  isWidthIncreased: boolean = true;
  isFadeOut: boolean = true;
  isShifted: boolean = true;


  

  toggleWidth() {
    this.isWidthIncreased = !this.isWidthIncreased;
    console.log(this.isWidthIncreased)
  }

  toggleFade() {
    this.isFadeOut = !this.isFadeOut;
    console.log(this.isFadeOut);
  }

  toggleShift() {
    this.isShifted = !this.isShifted;
  }
}
