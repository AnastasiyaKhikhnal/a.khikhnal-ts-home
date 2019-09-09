import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerControlComponent } from './timer-control/timer-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimerControlComponent, OddComponent, EvenComponent],
  exports: [TimerControlComponent,OddComponent, EvenComponent ]
})

export class TimerControlComponentModule {}