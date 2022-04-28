import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./AuthInterceptor";
import { CompDetailComponent } from './comp-detail/comp-detail.component';
import { CompVacComponent } from './comp-vac/comp-vac.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacanciesDetailComponent } from './vacancies-detail/vacancies-detail.component';
import { VacanciesTopComponent } from './vacancies-top/vacancies-top.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompDetailComponent,
    CompVacComponent,
    VacanciesComponent,
    VacanciesDetailComponent,
    VacanciesTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
