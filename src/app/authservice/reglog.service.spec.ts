import { TestBed } from '@angular/core/testing';

import { ReglogService } from './reglog.service';

describe('ReglogService', () => {
  let service: ReglogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReglogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
