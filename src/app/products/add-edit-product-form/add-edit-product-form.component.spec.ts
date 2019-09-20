import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductFormComponent } from './add-edit-product-form.component';

describe('AddEditProductFormComponent', () => {
  let component: AddEditProductFormComponent;
  let fixture: ComponentFixture<AddEditProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
