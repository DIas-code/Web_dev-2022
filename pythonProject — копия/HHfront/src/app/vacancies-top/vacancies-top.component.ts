import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../models";
import {VacancyServiceService} from "../services/vacancy-service.service";

@Component({
  selector: 'app-vacancies-top',
  templateUrl: './vacancies-top.component.html',
  styleUrls: ['./vacancies-top.component.css']
})
export class VacanciesTopComponent implements OnInit {
  vacancies: Vacancy[]=[]
  constructor(private vService: VacancyServiceService) { }

  ngOnInit(): void {
    this.getTop()
  }
  getTop(){
    return this.vService.getVacancyTop().subscribe((data)=>{
      this.vacancies=data
    })
  }
}
