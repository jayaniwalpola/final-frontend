import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyForgetPasswordComponent } from './company-forget-password.component';

describe('CompanyForgetPasswordComponent', () => {
  let component: CompanyForgetPasswordComponent;
  let fixture: ComponentFixture<CompanyForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyForgetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
