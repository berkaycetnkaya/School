/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PopupschoolService } from './popupschool.service';

describe('Service: Popupschool', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupschoolService]
    });
  });

  it('should ...', inject([PopupschoolService], (service: PopupschoolService) => {
    expect(service).toBeTruthy();
  }));
});
