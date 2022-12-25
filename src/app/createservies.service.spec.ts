import { TestBed } from '@angular/core/testing';

import { CreateserviesService } from './createservies.service';

describe('CreateserviesService', () => {
  let service: CreateserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
