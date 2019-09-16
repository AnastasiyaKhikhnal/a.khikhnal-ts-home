import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserRegistrationFormModule } from './user-registration-form/user-registration-form.module';


@NgModule({
  imports:      [ BrowserModule, UserRegistrationFormModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
