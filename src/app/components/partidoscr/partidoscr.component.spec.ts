import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoscrComponent } from './partidoscr.component';

describe('PartidoscrComponent', () => {
  let component: PartidoscrComponent;
  let fixture: ComponentFixture<PartidoscrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidoscrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidoscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
