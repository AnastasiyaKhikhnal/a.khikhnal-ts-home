import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [UserFormComponent],
  providers: [UserService],
  exports: [UserFormComponent]
})
export class UserRegistrationFormModule { }