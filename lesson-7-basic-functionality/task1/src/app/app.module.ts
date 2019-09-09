import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TimerControlComponentModule } from './timer-control-component/timer-control-component.module';


@NgModule({
  imports: [BrowserModule, TimerControlComponentModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
