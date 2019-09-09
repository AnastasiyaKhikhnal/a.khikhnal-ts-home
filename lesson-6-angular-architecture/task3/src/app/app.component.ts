import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  visible = true;
  counter = 0;
  array = [];

  hideText() {
    this.visible = !this.visible;
    this.counter++;
    const obj: object = {counter: this.counter};
    this.array.push(obj);
  }

  constructor() {
  }
}