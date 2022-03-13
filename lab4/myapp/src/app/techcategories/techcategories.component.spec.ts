import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechcategoriesComponent } from './techcategories.component';

describe('TechcategoriesComponent', () => {
  let component: TechcategoriesComponent;
  let fixture: ComponentFixture<TechcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
