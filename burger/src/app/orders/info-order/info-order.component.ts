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
  numOrder: number;
  constructor(private service : OrderService) { }

  ngOnInit() {
    this.service.getTickets().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          ...item.payload.doc.data() } as Ticket;
      });
       this.numOrder = this.list.length;
    })
  }
  sendInfoOrder(){
    console.log('entra aqui');
  }
}