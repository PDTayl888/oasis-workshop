import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVideoPlayerComponent } from './dashboard-video-player.component';

describe('DashboardVideoPlayerComponent', () => {
  let component: DashboardVideoPlayerComponent;
  let fixture: ComponentFixture<DashboardVideoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardVideoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
