import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileSettingsComponent } from './company-profile-settings.component';

describe('CompanyProfileSettingsComponent', () => {
  let component: CompanyProfileSettingsComponent;
  let fixture: ComponentFixture<CompanyProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
