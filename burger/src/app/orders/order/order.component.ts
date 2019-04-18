import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
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
  menu = 'D';
  constructor(private service : OrderService,
  private data : OrderOfflineService) { }

  ngOnInit() {
    this.knowTypeMenu(5,19);
    // const knowTypeMenu = () => {
    //   let hours = new Date().getHours();
    //   if(hours >5 && hours < 11) return 'D';
    //   else return 'A';
    // }
    this.data.menuList.subscribe(typeMenu => this.menu = typeMenu)
    this.service.getOrders().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() } as Order;
      }).filter(item => item.its=== this.menu);
    })
    this.data.totalOrder.subscribe(objTotalOrder => this.objTotalOrder = objTotalOrder)
  }
  onChange(selectItem: string) {
    const productoSeleccionado = this.list.filter(item => item.id=== selectItem)[0];
    this.data.addTotalOrder({...productoSeleccionado,cant:1,total:productoSeleccionado.price});
    this.data.changeTotal();
  }
  knowTypeMenu(initialD: number, initialA: number){
    this.data.typeMenu(initialD, initialA);
  }
}