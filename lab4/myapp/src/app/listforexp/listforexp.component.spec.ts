import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListforexpComponent } from './listforexp.component';

describe('ListforexpComponent', () => {
  let component: ListforexpComponent;
  let fixture: ComponentFixture<ListforexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListforexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListforexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
