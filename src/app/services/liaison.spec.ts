import { TestBed } from '@angular/core/testing';

import { Liaison } from './liaison';

describe('Liaison', () => {
  let service: Liaison;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Liaison);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
