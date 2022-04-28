import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompVacComponent } from './comp-vac.component';

describe('CompVacComponent', () => {
  let component: CompVacComponent;
  let fixture: ComponentFixture<CompVacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompVacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
