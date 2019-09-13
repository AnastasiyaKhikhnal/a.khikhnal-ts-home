import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  providers: [ UserService ]
})
export class InactiveUserComponent implements OnInit {

  inactiveUsers: string[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.inactiveUsers = this.userService.getInactiveUsers();
  }
}