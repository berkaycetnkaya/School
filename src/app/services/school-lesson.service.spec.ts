import { TestBed } from '@angular/core/testing';

import { SchoolLessonService } from './school-lesson.service';

describe('SchoolLessonService', () => {
  let service: SchoolLessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolLessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
