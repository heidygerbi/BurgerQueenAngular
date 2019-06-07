import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {

  private isUserLoggedIn: boolean;
  public usserLogged:User;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:User) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  
  }

  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }

}