import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerProfileSettingsComponent } from './jobseeker-profile-settings.component';

describe('JobseekerProfileSettingsComponent', () => {
  let component: JobseekerProfileSettingsComponent;
  let fixture: ComponentFixture<JobseekerProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
