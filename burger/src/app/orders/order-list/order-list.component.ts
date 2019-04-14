import { Component, OnInit } from '@angular/core';
import { OrderOfflineService } from 'src/app/shared/order-offline.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  arrObjTotalOrders = [];
  list = [];
  constructor(private data: OrderOfflineService) {
    this.data.totalOrder.subscribe(obj =>{
       this.arrObjTotalOrders.push(obj);
       this.list = this.arrObjTotalOrders.filter(item => item.item !== undefined);
     });
     
     console.log(this.list);
    }
   ngOnInit() {
  }
}