import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { DashboardComponent } from './components/dashboard.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    DashboardComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
