import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerVacancyDashboardComponent } from './jobseeker-vacancy-dashboard.component';

describe('JobseekerVacancyDashboardComponent', () => {
  let component: JobseekerVacancyDashboardComponent;
  let fixture: ComponentFixture<JobseekerVacancyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerVacancyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerVacancyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
