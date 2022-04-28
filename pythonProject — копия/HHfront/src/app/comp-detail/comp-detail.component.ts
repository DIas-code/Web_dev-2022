import { Component, OnInit } from '@angular/core';
import {Company} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../services/company.service";

@Component({
  selector: 'app-comp-detail',
  templateUrl: './comp-detail.component.html',
  styleUrls: ['./comp-detail.component.css']
})
export class CompDetailComponent implements OnInit {
  company: Company | undefined;
  constructor(private route: ActivatedRoute,
              private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(){
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.companyService.getCompany(id).subscribe((data)=>{
        this.company = data
      });
    });
  }
}
