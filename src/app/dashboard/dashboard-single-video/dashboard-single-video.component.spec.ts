import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSingleVideoComponent } from './dashboard-single-video.component';

describe('DashboardSingleVideoComponent', () => {
  let component: DashboardSingleVideoComponent;
  let fixture: ComponentFixture<DashboardSingleVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSingleVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSingleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
