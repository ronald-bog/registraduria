import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportec2Component } from './reportec2.component';

describe('Reportec2Component', () => {
  let component: Reportec2Component;
  let fixture: ComponentFixture<Reportec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportec2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
