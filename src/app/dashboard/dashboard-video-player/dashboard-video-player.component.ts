import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-video-player',
  templateUrl: './dashboard-video-player.component.html',
  styleUrls: ['./dashboard-video-player.component.css']
})
export class DashboardVideoPlayerComponent implements OnInit {
  @Input() video;

  constructor() { }

  ngOnInit() {
  }

}
