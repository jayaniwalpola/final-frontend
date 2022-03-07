import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyAddComponent } from './vacancy-add.component';

describe('VacancyAddComponent', () => {
  let component: VacancyAddComponent;
  let fixture: ComponentFixture<VacancyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
