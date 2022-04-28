import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../models";
import {VacancyServiceService} from "../services/vacancy-service.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = []
  constructor(private vacancyService: VacancyServiceService) { }

  ngOnInit(): void {
    this.getVacancies()
  }
  getVacancies(){
    return this.vacancyService.getVacancies().subscribe((data)=>{
      this.vacancies = data;
    })
  }
}
