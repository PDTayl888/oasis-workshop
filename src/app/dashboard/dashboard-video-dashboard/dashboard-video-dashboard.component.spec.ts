import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVideoDashboardComponent } from './dashboard-video-dashboard.component';

describe('DashboardVideoDashboardComponent', () => {
  let component: DashboardVideoDashboardComponent;
  let fixture: ComponentFixture<DashboardVideoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardVideoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVideoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
