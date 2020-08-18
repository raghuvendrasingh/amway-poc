import { TestBed } from '@angular/core/testing';

import { CheckuserGuard } from './checkuser.guard';

describe('CheckuserGuard', () => {
  let guard: CheckuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
