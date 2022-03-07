import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyUpdateComponent } from './vacancy-update.component';

describe('VacancyUpdateComponent', () => {
  let component: VacancyUpdateComponent;
  let fixture: ComponentFixture<VacancyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
