import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSeasonComponent } from './choose-season.component';

describe('ChooseSeasonComponent', () => {
  let component: ChooseSeasonComponent;
  let fixture: ComponentFixture<ChooseSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseSeasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
