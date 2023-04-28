import { TestBed } from '@angular/core/testing';

import { IamloggedService } from './iamlogged.service';

describe('IamloggedService', () => {
  let service: IamloggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IamloggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
