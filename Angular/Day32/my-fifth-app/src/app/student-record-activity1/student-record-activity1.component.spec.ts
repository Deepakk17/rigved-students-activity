import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRecordActivity1Component } from './student-record-activity1.component';

describe('StudentRecordActivity1Component', () => {
  let component: StudentRecordActivity1Component;
  let fixture: ComponentFixture<StudentRecordActivity1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRecordActivity1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRecordActivity1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
