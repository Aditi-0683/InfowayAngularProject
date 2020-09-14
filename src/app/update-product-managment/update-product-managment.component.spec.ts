import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductManagmentComponent } from './update-product-managment.component';

describe('UpdateProductManagmentComponent', () => {
  let component: UpdateProductManagmentComponent;
  let fixture: ComponentFixture<UpdateProductManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
