import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<my-warning-alert></my-warning-alert>
   <my-success-alert></my-success-alert>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
