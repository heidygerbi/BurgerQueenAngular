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
  totalCash = 0;
  constructor(private data: OrderOfflineService) {
    this.data.totalOrder.subscribe(arr =>{
       this.list= arr;
     });
    this.data.totalCash.subscribe(total =>{
      this.totalCash= total;
    });

  }
  ngOnInit() {
 
  }
  onChangeCant(cant: number, price: number, id: String) {
    this.data.changeCant(cant, price, id);
    this.data.changeTotal();
  }
  onDelete(id: String){
    this.data.deleteProduct(id);
    this.data.changeTotal();
  }
}