import { TestBed } from '@angular/core/testing';

import { FinalIdResloverService } from './final-id-reslover.service';

describe('FinalIdResloverService', () => {
  let service: FinalIdResloverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalIdResloverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
