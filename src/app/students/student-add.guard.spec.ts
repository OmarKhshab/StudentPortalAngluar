import { TestBed } from '@angular/core/testing';

import { StudentAddGuard } from './student-add.guard';

describe('StudentAddGuard', () => {
  let guard: StudentAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
