import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerCompanyComponent } from './jobseeker-company.component';

describe('JobseekerCompanyComponent', () => {
  let component: JobseekerCompanyComponent;
  let fixture: ComponentFixture<JobseekerCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
