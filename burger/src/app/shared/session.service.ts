import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private waiteronNames = new BehaviorSubject([]);
  waiteronName = this.waiteronNames.asObservable();
  constructor() { }
  login(username:string, password:string) {
    console.log('email: '+username);
    console.log('pass: '+password);

  }
}