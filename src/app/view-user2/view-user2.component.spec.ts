import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUser2Component } from './view-user2.component';

describe('ViewUser2Component', () => {
  let component: ViewUser2Component;
  let fixture: ComponentFixture<ViewUser2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUser2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
