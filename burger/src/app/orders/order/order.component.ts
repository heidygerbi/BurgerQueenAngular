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
    const knowTypeMenu = () => {
      let hours = new Date().getHours();
      if(hours >5 && hours < 11) return 'D';
      else return 'A';
    }
    this.resetForm();
    this.service.getOrders().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() } as Order;
      }).filter(item => item.its=== knowTypeMenu());
    })
    this.data.totalOrder.subscribe(objTotalOrder => this.objTotalOrder = objTotalOrder)
  }
  onChange(selectItem: string) {
    const productoSeleccionado = this.list.filter(item => item.id=== selectItem)[0]
    return this.data.addTotalOrder({...productoSeleccionado,cant:1});
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
}