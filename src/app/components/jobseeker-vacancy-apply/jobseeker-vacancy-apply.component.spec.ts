import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerVacancyApplyComponent } from './jobseeker-vacancy-apply.component';

describe('JobseekerVacancyApplyComponent', () => {
  let component: JobseekerVacancyApplyComponent;
  let fixture: ComponentFixture<JobseekerVacancyApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerVacancyApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerVacancyApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
