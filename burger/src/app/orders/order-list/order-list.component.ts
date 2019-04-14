import { Component, OnInit } from '@angular/core';
import { OrderOfflineService } from 'src/app/shared/order-offline.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  arrObjTotalOrders = [];
  list = [];
  total: any;
  constructor(private data: OrderOfflineService) {
    this.data.totalOrder.subscribe(obj =>{
       this.arrObjTotalOrders.push(obj);
       this.list= this.arrObjTotalOrders.slice();
       this.list = this.list.filter(item => item.item !== undefined);
     });
    }
   ngOnInit() {

  }
  onChangeCant(cant: number, price: number) {
    // console.log('esto es total es: '+cant*price);
    this.total = cant*price;
  }
  onSubmit(tr: NgForm){
    console.log('Entra aquí');
    // let data = Object.assign({},form.value);
    // delete data.id;
    // // if (form.value.id == null)
    //   this.firestore.collection('orders').add(data);
    // // else
    // //   this.firestore.doc('orders/'+form.value.id).update(data);
    // this.resetForm(form);
    // this.toastr.success('Submtted successfully', 'pedido registrado.');
  }
}