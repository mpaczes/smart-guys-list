import { TestBed } from '@angular/core/testing';

import { BrainiacService } from './brainiac.service';

describe('BrainiacService', () => {
  let service: BrainiacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrainiacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
