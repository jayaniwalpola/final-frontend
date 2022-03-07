import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelVacancyComponent } from './channel-vacancy.component';

describe('ChannelVacancyComponent', () => {
  let component: ChannelVacancyComponent;
  let fixture: ComponentFixture<ChannelVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelVacancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
