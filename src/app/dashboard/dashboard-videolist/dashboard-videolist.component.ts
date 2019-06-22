import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashboard-videolist',
  templateUrl: './dashboard-videolist.component.html',
  styleUrls: ['./dashboard-videolist.component.css']
})
export class DashboardVideolistComponent implements OnInit {

  @Input() videoInputs = [];
  selected: number;
  @Output() videoSelected = new EventEmitter();


  
  

  constructor() { }

  highlight(param, video) {
    console.log(param);
    this.selected = param;
    console.log(video);
    this.videoSelected.emit(video);
  }



  ngOnInit() {
  }

}


