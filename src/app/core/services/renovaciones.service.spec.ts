import { TestBed } from '@angular/core/testing';

import { RenovacionesService } from './renovaciones.service';

describe('RenovacionesService', () => {
  let service: RenovacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenovacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
