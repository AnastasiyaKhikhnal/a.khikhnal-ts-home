import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Validator } from './validator';

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.css'],
  template: `
  <div>
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <div>
      <label for="name">Project name</label>
      <input type="text" id="name" placeholder="Project name" formControlName="projectName">
    </div>
    <div class="error" *ngIf="form.controls['projectName'].invalid &&
     form.controls['projectName'].touched">
      Project name is required or incorrect name
    </div>
    <div>
      <label for="email">E-mail</label>
      <input type="text" id="email" placeholder="E-mail" formControlName="mail">
    <div class="error" *ngIf="form.controls['mail'].invalid && form.controls['mail'].touched">
      Email is required or incorrect email
    </div>
    </div>
    <div>
      <label for="status">Project Status</label>
      <select id="status" formControlName="projectStatusDropdown">
        <option value="">Select status</option>
        <option *ngFor="let statusItem of status" [value]="statusItem">
          {{ statusItem }}
        </option>
      </select>
    </div>
    <div>
      <button type="submit" [disabled]="form.invalid">
        Submit
      </button>
    </div>
  </form>
</div>
`
})

export class FormComponent {

  status: string[] = ['Stable', 'Critical', 'Finished'];

  form = new FormGroup({
    projectName: new FormControl('', [Validators.required],
        [Validator.checkAsyncProjectName.bind(this)]),
    mail: new FormControl('',
        [ Validators.required, Validators.email] ),
    projectStatusDropdown: new FormControl('')
    });

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}