import { TestBed } from '@angular/core/testing';

import { StudentEditGuard } from './student-edit.guard';

describe('StudentEditGuard', () => {
  let guard: StudentEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
