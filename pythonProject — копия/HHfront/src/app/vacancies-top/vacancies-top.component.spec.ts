import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesTopComponent } from './vacancies-top.component';

describe('VacanciesTopComponent', () => {
  let component: VacanciesTopComponent;
  let fixture: ComponentFixture<VacanciesTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanciesTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
