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
    this.data.totalOrder.subscribe(arr =>{
    // ]this.arrObjTotalOrders = [...this.arrObjTotalOrders, obj ]
       this.list= arr;
      //  this.list = this.list.filter(item => item.item !== undefined);
       console.log('this.list');
       console.log(this.list);
     });

  }
   ngOnInit() {
 
  }
  onChangeCant(cant: number, price: number, id: String) {
    this.data.changeCant(cant, price, id); 
  }
  onDelete(id: String){
    this.data.deleteProduct(id);
  }
}