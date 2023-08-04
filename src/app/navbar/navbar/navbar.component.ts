import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMobile = false;
  isTablet = false;
  isDesktop = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize()
  {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth <= 768;
    this.isTablet = screenWidth > 768 && screenWidth <= 1024;
    this.isDesktop = screenWidth > 1024;
  }
}
