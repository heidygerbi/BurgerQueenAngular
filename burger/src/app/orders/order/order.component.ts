import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/shared/order.model';
import { OrderOfflineService } from 'src/app/shared/order-offline.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  objTotalOrder = {};
  list: Order[];
  constructor(private service : OrderService,
    private firestore:AngularFirestore,
    private toastr : ToastrService,
    private data : OrderOfflineService) { }

  ngOnInit() {
     let hours = new Date().getHours();
    let minute = new Date().getMinutes();
    let knowTypeMenu = 'A';
    if(hours >=6 && hours <=12 && minute === 0) knowTypeMenu ='D';
    this.resetForm();
    this.service.getOrders().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() } as Order;
      }).filter(item => item.its=== knowTypeMenu);
    })
    this.data.currentTotalOrder.subscribe(objTotalOrder => this.objTotalOrder = objTotalOrder)
  }
  onChange(selectItem) {
    // selectItem
    console.log(this.list.filter(item => item.id=== selectItem)[0]);//sacar objeto -- Listo
    console.log(this.data.addTotalOrder(this.list.filter(item => item.id=== selectItem)[0]));
//     this.data.currentMessage.subscribe(message => this.message = message)
  }
  resetForm(form? : NgForm){
    if (form!= null)
      form.resetForm();
    this.service.formData = {
      id: null,
      item:'',
      its:'',
      price:0,
    }
  }
  onSubmit(form:NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    // if (form.value.id == null)
      this.firestore.collection('orders').add(data);
    // else
    //   this.firestore.doc('orders/'+form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submtted successfully', 'pedido registrado.');
  }
}


// import { Component, OnInit } from '@angular/core';
// import { DataService } from "../data.service";

// @Component({
//   selector: 'app-parent',
//   template: `
//     {{message}}
//   `,
//   styleUrls: ['./sibling.component.css']
// })
// export class ParentComponent implements OnInit {

//   message:string;

//   constructor(private data: DataService) { }

//   ngOnInit() {
//     this.data.currentMessage.subscribe(message => this.message = message)
//   }

// }