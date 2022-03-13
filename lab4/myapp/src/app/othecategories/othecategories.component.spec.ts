import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthecategoriesComponent } from './othecategories.component';

describe('OthecategoriesComponent', () => {
  let component: OthecategoriesComponent;
  let fixture: ComponentFixture<OthecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthecategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
