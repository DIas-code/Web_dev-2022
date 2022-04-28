import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../services/company.service";
import {VacancyServiceService} from "../services/vacancy-service.service";

@Component({
  selector: 'app-comp-vac',
  templateUrl: './comp-vac.component.html',
  styleUrls: ['./comp-vac.component.css']
})
export class CompVacComponent implements OnInit {
  vacancies: Vacancy[];
  // @ts-ignore
  company: Company;
  v: any;

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService,
              private vService: VacancyServiceService) {
    this.vacancies=[]
  }

  ngOnInit(): void {
    this.getCompanyVac()
  }
  getCompanyVac(){
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.vService.getVacancyCom(id).subscribe((data)=>{
        this.vacancies = data
      });
    });
  }

}
