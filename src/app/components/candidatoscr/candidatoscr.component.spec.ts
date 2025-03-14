import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoscrComponent } from './candidatoscr.component';

describe('CandidatoscrComponent', () => {
  let component: CandidatoscrComponent;
  let fixture: ComponentFixture<CandidatoscrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoscrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
