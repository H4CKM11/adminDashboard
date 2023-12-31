import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    DashboardModule,
    BrowserAnimationsModule,
    MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
