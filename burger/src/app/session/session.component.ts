import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/session.service';
import { UserService } from '../shared/user.service';
import { User } from 'src/app/shared/order.model';
import { OrderService } from '../shared/order.service';
import { OrderOfflineService } from 'src/app/shared/order-offline.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  nameUser = '';
  passwordUser = '';
  listUser: User[];
  constructor(private router: Router, private service: OrderService, private data : OrderOfflineService) { }

  ngOnInit() {
    this.service.getUser().subscribe(userArray => {
      this.listUser = userArray.map(item => {
        return {
          ...item.payload.doc.data() } as User;
      }).filter(item => (item.name === this.nameUser && item.password === this.passwordUser));
    })
    // this.data.totalOrder.subscribe(objTotalOrder => this.objTotalOrder = objTotalOrder)
    console.log(this.listUser);
  }

  logIn(username: string, password: string) {
    this.nameUser = username;
    this.passwordUser = password;
    console.log('esto es user: '+username);
    console.log('esto es pass: '+password);

    // console.log('esto es user: '+username);
    // console.log('esto es pass: '+password);
    // console.log('esto es event: '+event);
    // this.navigate('waiteron');
  }

  // navigate(level: string) {
  //   switch (level) {
  //     case 'waiteron': 
  //       this.router.navigateByUrl('waiteron');        
  //       break;
  //   }

  // }
}




// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { SessionService } from '../shared/session.service';
// import { UserService } from '../shared/user.service';
// import { User } from '../shared/user.model';

// @Component({
//   selector: 'app-session',
//   templateUrl: './session.component.html',
//   styleUrls: ['./session.component.css']
// })
// export class SessionComponent implements OnInit {

//   constructor(private sessionService: SessionService, private router: Router, private userService: UserService) { }

//   ngOnInit() {
//   }

//   logIn(username: string, password: string, event: Event) {
//     console.log('esto es user: '+username);
//     console.log('esto es pass: '+password);
//     console.log('esto es event: '+event);
//     this.navigate('waiteron');
//   }

//   navigate(level: string) {
//     switch (level) {
//       case 'waiteron': 
//         this.router.navigateByUrl('/waiteron');        
//         break;
//     }

//   }
// }