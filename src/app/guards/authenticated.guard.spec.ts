import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { authenticatedGuard } from './authenticated.guard';

describe('authenticatedGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authenticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
