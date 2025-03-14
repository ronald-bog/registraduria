import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportea2Component } from './reportea2.component';

describe('Reportea2Component', () => {
  let component: Reportea2Component;
  let fixture: ComponentFixture<Reportea2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportea2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
