import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private activeUsers: string[] = ['Tom', 'Jack', 'Mary'];
  private inactiveUsers: string[] = ['Jery', 'Mike', 'Bob'];

  getActiveUsers(): string[] {
    return this.activeUsers;
  } 

  getInactiveUsers(): string[] {
    return this.inactiveUsers;
  } 
}