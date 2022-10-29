import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrainiacService } from './brainiac.service';

describe('BrainiacService', () => {
  let service: BrainiacService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule  ],
      providers: [ BrainiacService ]
    });
    
    service = TestBed.inject(BrainiacService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
