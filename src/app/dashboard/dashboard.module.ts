import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardVideoDashboardComponent } from './dashboard-video-dashboard/dashboard-video-dashboard.component';
import { DashboardVideolistComponent } from './dashboard-videolist/dashboard-videolist.component';
import { DashboardVideoPlayerComponent } from './dashboard-video-player/dashboard-video-player.component';
import { DashboardStatFiltersComponent } from './dashboard-stat-filters/dashboard-stat-filters.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSingleVideoComponent } from './dashboard-single-video/dashboard-single-video.component';

const childRoutes: Routes = [
  { path: '', component: DashboardVideoDashboardComponent }
];

@NgModule({
  declarations: [
    DashboardVideoDashboardComponent, 
    DashboardVideolistComponent, 
    DashboardVideoPlayerComponent, 
    DashboardStatFiltersComponent, 
    DashboardSingleVideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class DashboardModule { }
