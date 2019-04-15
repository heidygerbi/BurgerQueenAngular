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
       this.list= this.arrObjTotalOrders.slice();
       this.list = this.list.filter(item => item.item !== undefined);
     });
    }
   ngOnInit() {

  }
  onChangeCant(cant: number, price: number, id: String) {
    this.list.forEach(element => {
      if (element.id === id){ 
        element.cant = cant;
        element.total = cant*price;
      }
    });
  }
  onDelete(id: String){
    let i = 0;
    this.list.forEach(element => {
      i++;
      if (element.id === id){ 
        this.list.splice(element,i);
       }
    });
  }
}