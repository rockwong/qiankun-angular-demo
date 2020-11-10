import { Component, AfterViewInit } from '@angular/core';
import start from './core/mirco/start';

@Component({
  selector: 'vx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
  title = 'vx-dashboard';
  ngAfterViewInit() {
    start(); // 开启微应用
  }
}
