import { TestBed } from '@angular/core/testing';
import { Networks } from './networks';

describe('Networks', () => {
  let service: Networks;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Networks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
