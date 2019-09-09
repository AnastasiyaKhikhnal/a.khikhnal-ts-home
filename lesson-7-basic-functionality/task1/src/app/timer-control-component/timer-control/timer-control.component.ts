import { Component,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-timer',
  templateUrl: './timer-control.component.html',
  styleUrls: [ './timer-control.component.css' ]
})
export class TimerControlComponent  {

  @Output()
  start: EventEmitter<any> = new EventEmitter();

  @Output()
  stop: EventEmitter<any> = new EventEmitter();

  startTimer() {
    this.start.emit();
  }

  stopTimer() {
    this.stop.emit();
  }
}
