import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { Ticket } from 'src/app/shared/order.model';
@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.css']
})
export class InfoOrderComponent implements OnInit {
  list: Ticket[];
  listCopy = [];
  numOrder: number;
  constructor(private service : OrderService) { }

  ngOnInit() {
    this.service.getTickets().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          ...item.payload.doc.data() } as Ticket;
      });
       this.listCopy = this.list.slice();
       this.numOrder = this.listCopy.length;
    })
  }
  sendInfoOrder(){
    console.log('entra aqui');
  }
}

// import { Component, OnInit } from '@angular/core';
// import { OrderService } from 'src/app/shared/order.service';
// import { NgForm } from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { ToastrService } from 'ngx-toastr';
// import { Order } from 'src/app/shared/order.model';
// @Component({
//   selector: 'app-order',
//   templateUrl: './order.component.html',
//   styleUrls: ['./order.component.css']
// })

// export class OrderComponent implements OnInit {

//   list: Order[];
//   constructor(private service : OrderService,
//     private firestore:AngularFirestore,
//     private toastr : ToastrService) { }

//   ngOnInit() {
//     let hours = new Date().getHours();
//     let minute = new Date().getMinutes();
//     let knowTypeMenu = '';
//     if(hours >=6 && hours <=12 && minute === 0) knowTypeMenu ='D';
//     else knowTypeMenu = 'A';
//     this.resetForm();
//     this.service.getOrders().subscribe(actionArray => {
//       this.list = actionArray.map(item => {
//         return {
//           id: item.payload.doc.id,
//           ...item.payload.doc.data() } as Order;
//       }).filter(item => item.its=== knowTypeMenu);
//     })
//   }
//   onChange(selectItem) {
//     console.log(selectItem);
// }
//   resetForm(form? : NgForm){
//     if (form!= null)
//       form.resetForm();
//     this.service.formData = {
//       id: null,
//       item:'',
//       its:'',
//       price:0,
//     }
//   }
//   onSubmit(form:NgForm){
//     let data = Object.assign({},form.value);
//     delete data.id;
//     // if (form.value.id == null)
//       this.firestore.collection('orders').add(data);
//     // else
//     //   this.firestore.doc('orders/'+form.value.id).update(data);
//     this.resetForm(form);
//     this.toastr.success('Submtted successfully', 'pedido registrado.');
//   }
// }