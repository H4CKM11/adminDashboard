import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


  isMobile = false;
  isTablet = false;
  isDesktop = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
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
