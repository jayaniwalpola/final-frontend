import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerExamPageComponent } from './job-seeker-exam-page.component';

describe('JobSeekerExamPageComponent', () => {
  let component: JobSeekerExamPageComponent;
  let fixture: ComponentFixture<JobSeekerExamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSeekerExamPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSeekerExamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
