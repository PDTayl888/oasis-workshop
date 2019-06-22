import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVideolistComponent } from './dashboard-videolist.component';

describe('DashboardVideolistComponent', () => {
  let component: DashboardVideolistComponent;
  let fixture: ComponentFixture<DashboardVideolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardVideolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVideolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
