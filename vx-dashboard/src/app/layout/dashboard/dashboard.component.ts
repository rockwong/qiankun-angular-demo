import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  push(subapp){
    history.pushState(null, subapp, subapp)
  }

}
