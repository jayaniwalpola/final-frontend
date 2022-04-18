import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySelectedJobseekersComponent } from './company-selected-jobseekers.component';

describe('CompanySelectedJobseekersComponent', () => {
  let component: CompanySelectedJobseekersComponent;
  let fixture: ComponentFixture<CompanySelectedJobseekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySelectedJobseekersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySelectedJobseekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
