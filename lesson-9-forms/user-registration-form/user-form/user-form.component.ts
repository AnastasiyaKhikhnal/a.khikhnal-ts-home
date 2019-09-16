import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],

})
export class UserFormComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
  }

  @Output()
  data: EventEmitter<User> = new EventEmitter<User>();

  submitForm (user: User, isValid: boolean) {
    if (isValid)
      this.data.emit(user);
  }
  
  ngOnInit() {
    this.user = this.userService.getUser();
  }

   nameUserSuggest() {
    this.user.userName = "Mike"; 
  }
}