import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userNames = new BehaviorSubject([]);
  userName = this.userNames.asObservable();
  constructor() { }
  login(objInfUser: {}) {


  }
}