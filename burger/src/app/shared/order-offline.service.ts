import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderOfflineService {
  private totalOrders = new BehaviorSubject({});
  totalOrder = this.totalOrders.asObservable();

  constructor() { }

  addTotalOrder(objTotalOrder: {}) {
    this.totalOrders.next(objTotalOrder);
  }
}