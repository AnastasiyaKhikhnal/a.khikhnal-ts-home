import { Component } from '@angular/core';

@Component({
  selector: 'my-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessComponent {
  successMessage: string = 'Документ успешно загружен :)';

} 