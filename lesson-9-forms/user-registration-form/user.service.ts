import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class UserService {

  user: User = {
    userName: '',
    email: '',
    secret: ['What is your pet nickname?', 'What is your home phone number?', 'What is your mother’s maiden name?'],
    questionAnswer: '',
    gender: ''
  };

  getUser(): User {
    return this.user;
  }
}