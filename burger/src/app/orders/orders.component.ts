import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderOfflineService } from '../shared/order-offline.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router: Router, private data: OrderOfflineService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.data.submit();
  }
}
