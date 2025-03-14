import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportebComponent } from './reporteb.component';

describe('ReportebComponent', () => {
  let component: ReportebComponent;
  let fixture: ComponentFixture<ReportebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
