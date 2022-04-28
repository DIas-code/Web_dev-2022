import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken, Company} from "../models";

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  // @ts-ignore
  login(username, password): Observable<AuthToken>{
    // @ts-ignore
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username: username,
      password: password
    })
  }

  getCompanies(): Observable<Company[]>{
    // @ts-ignore
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }
  getCompany(id: number): Observable<Company>{
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}`)
  }
  getCompanyVac(id: number): Observable<Company>{
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}/vacancies`)
  }
}
