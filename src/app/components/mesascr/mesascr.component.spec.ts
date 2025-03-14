import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesascrComponent } from './mesascr.component';

describe('MesascrComponent', () => {
  let component: MesascrComponent;
  let fixture: ComponentFixture<MesascrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesascrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesascrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
