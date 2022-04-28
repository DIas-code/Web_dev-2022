import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesComponent} from "./companies/companies.component";
import {CompDetailComponent} from "./comp-detail/comp-detail.component";
import {CompVacComponent} from "./comp-vac/comp-vac.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {VacanciesDetailComponent} from "./vacancies-detail/vacancies-detail.component";
import {VacanciesTopComponent} from "./vacancies-top/vacancies-top.component";

const routes: Routes = [
  {path: 'company', component: CompaniesComponent},
  {path: 'company/:id', component: CompDetailComponent},
  {path: 'company/:id/vacancies', component: CompVacComponent},
  {path: 'vacancy', component: VacanciesComponent},
  {path: 'vacancy/top', component: VacanciesTopComponent},
  {path: 'vacancy/:id', component: VacanciesDetailComponent},

  {path:'', redirectTo: 'company', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
