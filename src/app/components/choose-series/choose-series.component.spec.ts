import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSeriesComponent } from './choose-series.component';

describe('ChooseSeriesComponent', () => {
  let component: ChooseSeriesComponent;
  let fixture: ComponentFixture<ChooseSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
