import { Component } from '@angular/core';

@Component({
  selector: 'my-warning-alert',
  template: `<h1> {{warningMessage}} </h1>`,
  styles: [`h1 { font-family: Arial; color: red }`]
})
export class WarningComponent  {
  warningMessage: string = 'Документ загружается, ждите...';
}