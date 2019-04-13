import { Component, OnInit } from '@angular/core';
import { OrderOfflineService } from 'src/app/shared/order-offline.service';
// import { OrderList } from 'src/app/shared/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  objTotalOrders = {};
  arrObjTotalOrders = [];
  // list: OrderList;
  constructor(private data: OrderOfflineService) {
  // console.log('este es el hermano de recibe (constructor): '+
  this.data.totalOrder.subscribe(obj => {
    // this.objTotalOrders = obj;
    this.arrObjTotalOrders.push(obj)
  });

  // subscribe(arrObjTotalOrders => this.arrObjTotalOrders));
    //this.arrObjTotalOrders = arrObjTotalOrders); 
    // this.arrObjTotalOrder as OrderList;
    console.log('esto es objTotalOrders: '+this.objTotalOrders);
  }
 
  ngOnInit() {
    // console.log('este es el hermano de recibe (ngOnInit): '+this.data.totalOrder.subscribe(arrObjTotalOrders => this.arrObjTotalOrders = arrObjTotalOrders));

    // console.log('esto es array: '+this.arrObjTotalOrder); 
    //  return this.arrObjTotalOrder as OrderList;
     
    // console.log('aqui: '+this.objTotalOrder)// as OrderList;  
    // this.data.currentTotalOrder.subscribe(objTotalOrder => console.log(this.objTotalOrder = objTotalOrder))
  
  }

  // newTotalOrder() {
  //   this.data.addTotalOrder(this.data.addTotalOrder(this.list.filter(item => item.id=== selectItem))
  //   })
  // }

}