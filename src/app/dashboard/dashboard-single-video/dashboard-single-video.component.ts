import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'dashboard-single-video',
  templateUrl: './dashboard-single-video.component.html',
  styleUrls: ['./dashboard-single-video.component.css']
})
export class DashboardSingleVideoComponent implements OnInit {
  @Input() video;

  constructor() { }

  ngOnInit() {
  }

}
