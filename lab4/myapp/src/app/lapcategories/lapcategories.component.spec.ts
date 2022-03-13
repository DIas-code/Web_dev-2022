import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapcategoriesComponent } from './lapcategories.component';

describe('LapcategoriesComponent', () => {
  let component: LapcategoriesComponent;
  let fixture: ComponentFixture<LapcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
