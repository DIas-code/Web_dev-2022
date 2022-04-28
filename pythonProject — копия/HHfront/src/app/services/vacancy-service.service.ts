import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken, Vacancy} from "../models";

@Injectable({
  providedIn: 'root'
})
export class VacancyServiceService {


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

  getVacancies(): Observable<Vacancy[]>{
    // @ts-ignore
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`);
  }
  getVacancy(id: number): Observable<Vacancy>{
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}`)
  }
  getVacancyCom(companyID: number): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${companyID}/vacancies`)
  }
  getVacancyTop(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/top_ten`)
  }
}
