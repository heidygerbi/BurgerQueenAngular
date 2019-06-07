import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userNames = new BehaviorSubject({});
  userName = this.userNames.asObservable();
  constructor(private router: Router) { }
  navegate(level:string){
    switch (level) {
     case 'M': 
       this.router.navigateByUrl('waiteron');
       break;
     case 'C': 
       this.router.navigateByUrl('index');//por cambiar
       break;
       case 'A': 
       this.router.navigateByUrl('index');//por cambiar
       break;
     default:
       this.router.navigateByUrl('');
       break;        
   }
 }
  login(objInfUser: { user: '', password: '', level: '' }) {
    console.log('Esto es objeto: ');
    console.log(objInfUser);
    objInfUser !== undefined || objInfUser.user !== '' ? this.navegate(objInfUser.level) : this.router.navigateByUrl('');
    this.userNames.next(objInfUser);
  }
}