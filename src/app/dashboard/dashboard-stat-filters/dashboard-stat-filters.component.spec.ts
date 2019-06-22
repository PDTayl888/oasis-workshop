import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStatFiltersComponent } from './dashboard-stat-filters.component';

describe('DashboardStatFiltersComponent', () => {
  let component: DashboardStatFiltersComponent;
  let fixture: ComponentFixture<DashboardStatFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStatFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
