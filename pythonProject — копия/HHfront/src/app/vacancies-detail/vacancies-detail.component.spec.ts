import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesDetailComponent } from './vacancies-detail.component';

describe('VacanciesDetailComponent', () => {
  let component: VacanciesDetailComponent;
  let fixture: ComponentFixture<VacanciesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanciesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
