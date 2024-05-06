import { TestBed } from '@angular/core/testing';

import { NosotrsService } from './nosotrs.service';

describe('NosotrsService', () => {
  let service: NosotrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NosotrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
