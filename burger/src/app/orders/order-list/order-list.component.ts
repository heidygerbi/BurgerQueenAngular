import { Component, OnInit } from '@angular/core';
import { OrderOfflineService } from 'src/app/shared/order-offline.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
objTotalOrder = {};
  constructor(private data: OrderOfflineService) {
    this.objTotalOrder = this.data.currentTotalOrder.subscribe(objTotalOrders => this.objTotalOrder = objTotalOrders) 
    console.log(this.objTotalOrder); 
  }

  ngOnInit() {
    // this.data.currentTotalOrder.subscribe(objTotalOrder => console.log(this.objTotalOrder = objTotalOrder))
  
  }

  // newTotalOrder() {
  //   this.data.addTotalOrder(this.data.addTotalOrder(this.list.filter(item => item.id=== selectItem))
  //   })
  // }

}