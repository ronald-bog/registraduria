import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportea1Component } from './reportea1.component';

describe('Reportea1Component', () => {
  let component: Reportea1Component;
  let fixture: ComponentFixture<Reportea1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportea1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
