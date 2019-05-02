import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/order.model';
import { OrderService } from '../shared/order.service';
import { OrderOfflineService } from 'src/app/shared/order-offline.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  userIdem: {};
  listUser: User[];
  constructor(
    private router: Router, 
    private service: OrderService, 
    private data : OrderOfflineService, 
    private dataSession: SessionService) { }

  ngOnInit() {
    this.service.getUser().subscribe(userArray => {
      this.listUser = userArray.map(item => {
        return {
          ...item.payload.doc.data() } as User;
      });
    })
    // this.data.totalOrder.subscribe(objTotalOrder => this.objTotalOrder = objTotalOrder)
    // console.log(this.listUser);
  }


  logIn(username: string, password: string) {
    this.userIdem= this.listUser.filter(item => (item.name === username && item.password === password));
    this.dataSession.login(this.userIdem[0]);
  }
}