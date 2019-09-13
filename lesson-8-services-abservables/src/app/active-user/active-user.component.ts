import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  providers: [ UserService ]
})
export class ActiveUserComponent implements OnInit { 

  activeUsers: string[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activeUsers = this.userService.getActiveUsers();
  }
}