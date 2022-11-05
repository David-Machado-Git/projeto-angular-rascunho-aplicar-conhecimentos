import { TestBed } from '@angular/core/testing';

import { NetoService } from './neto.service';

describe('NetoService', () => {
  let service: NetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
