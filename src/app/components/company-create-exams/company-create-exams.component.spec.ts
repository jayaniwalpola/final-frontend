import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateExamsComponent } from './company-create-exams.component';

describe('CompanyCreateExamsComponent', () => {
  let component: CompanyCreateExamsComponent;
  let fixture: ComponentFixture<CompanyCreateExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCreateExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
