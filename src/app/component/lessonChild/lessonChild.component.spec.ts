/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LessonChildComponent } from './lessonChild.component';

describe('LessonChildComponent', () => {
  let component: LessonChildComponent;
  let fixture: ComponentFixture<LessonChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
