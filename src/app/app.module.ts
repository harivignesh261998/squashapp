import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { PersonalInformationsComponent } from './Component/personal-informations/personal-informations.component';
import { CompanyInformationsComponent } from './Component/company-informations/company-informations.component';
import { EmailVerificationComponent } from './Component/email-verification/email-verification.component';

import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './Component/welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PersonalInformationsComponent,
    CompanyInformationsComponent,
    EmailVerificationComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule

   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
