import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,MatMenuModule,MatIconModule} from '@angular/material';
import { DashboardComponent } from './marketing/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LeadsComponent } from './dashboard/leads/leads.component';
import { OperationsDashboardComponent } from './operation/operations-dashboard/operations-dashboard.component';
import { AccountsComponentComponent } from './accounts/accounts-component/accounts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    LeadsComponent,
    OperationsDashboardComponent,
    AccountsComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatMenuModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
