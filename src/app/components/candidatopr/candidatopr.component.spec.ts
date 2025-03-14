import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoprComponent } from './candidatopr.component';

describe('CandidatoprComponent', () => {
  let component: CandidatoprComponent;
  let fixture: ComponentFixture<CandidatoprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
