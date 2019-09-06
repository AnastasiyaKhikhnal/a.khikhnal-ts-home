import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WarningComponent } from './../app/warning-alert/warning-alert.component';
import { SuccessComponent } from './../app/success-alert/success-alert.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, WarningComponent, SuccessComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
