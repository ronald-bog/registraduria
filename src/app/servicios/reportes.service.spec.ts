import { TestBed } from '@angular/core/testing';

import { ReporteService } from './reportes.service';

describe('Reportea1Service', () => {
  let service: ReporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
