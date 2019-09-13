import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-odd-component',
  templateUrl: './odd.component.html',
  styleUrls: [ './odd.component.css' ]
})

export class OddComponent  {
   @Input() array;

  constructor() { }

  checkOddNumber() {
    return this.array.filter((item) => (item % 2 !== 0));
  }
}
