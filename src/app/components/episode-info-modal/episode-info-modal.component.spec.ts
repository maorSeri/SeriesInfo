import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeInfoModalComponent } from './episode-info-modal.component';

describe('EpisodeInfoModalComponent', () => {
  let component: EpisodeInfoModalComponent;
  let fixture: ComponentFixture<EpisodeInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
