import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportec1Component } from './reportec1.component';

describe('Reportec1Component', () => {
  let component: Reportec1Component;
  let fixture: ComponentFixture<Reportec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportec1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
