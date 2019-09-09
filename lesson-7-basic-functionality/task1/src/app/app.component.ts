 import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  value = 1;
  timer: number;
  arrayValue = [];

  start() {
    this.timer = setInterval(() => {
      this.arrayValue.push(this.value);
      return this.value++; }, 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
}