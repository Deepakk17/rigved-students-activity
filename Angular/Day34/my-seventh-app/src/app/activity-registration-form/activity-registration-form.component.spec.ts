import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRegistrationFormComponent } from './activity-registration-form.component';

describe('ActivityRegistrationFormComponent', () => {
  let component: ActivityRegistrationFormComponent;
  let fixture: ComponentFixture<ActivityRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
