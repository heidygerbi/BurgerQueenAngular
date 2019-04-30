import { Component, OnInit } from '@angular/core';
import { OrderOfflineService } from 'src/app/shared/order-offline.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit {
  date = Date();
  typeMenu = 'Desayuno';
  constructor(private data: OrderOfflineService) { 
    this.data.menuList.subscribe(menu =>{
      if(menu === 'D' ) this.typeMenu = 'Desayuno';
      if(menu === 'A' ) this.typeMenu = 'Almuerzo';
    });
  }
  ngOnInit() {
  }
}