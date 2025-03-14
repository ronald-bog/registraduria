import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoscrComponent } from './resultadoscr.component';

describe('ResultadoscrComponent', () => {
  let component: ResultadoscrComponent;
  let fixture: ComponentFixture<ResultadoscrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoscrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
