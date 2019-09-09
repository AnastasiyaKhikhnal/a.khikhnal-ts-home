import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-even-component',
  templateUrl: './even.component.html',
  styleUrls: [ './even.component.css' ]
})

export class EvenComponent  {
  @Input() array;

  constructor() { }

  checkEvenNumber() {
    return this.array.filter((item) => (item % 2 === 0));
  }
}
