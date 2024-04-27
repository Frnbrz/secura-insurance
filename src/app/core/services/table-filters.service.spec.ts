import { TestBed } from '@angular/core/testing';

import { TableFiltersService } from './table-filters.service';

describe('TableFiltersService', () => {
  let service: TableFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
