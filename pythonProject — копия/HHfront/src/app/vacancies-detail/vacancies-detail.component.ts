import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from "../models";
import {VacancyServiceService} from "../services/vacancy-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancies-detail',
  templateUrl: './vacancies-detail.component.html',
  styleUrls: ['./vacancies-detail.component.css']
})
export class VacanciesDetailComponent implements OnInit {
  vacancy: Vacancy |undefined;
  constructor(private vService: VacancyServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVacancy();
  }
  getVacancy(){
    this.route.paramMap.subscribe((params)=>{
      // @ts-ignore
      const id = +params.get('id');
        this.vService.getVacancy(id).subscribe((data)=>{
          this.vacancy=data
        })

    })
  }
}
