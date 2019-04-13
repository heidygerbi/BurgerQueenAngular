import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderOfflineService {
  private totalOrders = new BehaviorSubject({});
  totalOrder = this.totalOrders.asObservable();

  constructor() { }

  // addTotalOrder entra un objeto sale un array

  addTotalOrder(objTotalOrder: {}) {
    this.totalOrders.next(objTotalOrder);
    

    // aqui se debe hacer una copia del array original
    // acumular objetos
    // hacer nuevo arr de order y enviarlo con next

      // //funciona  
  //   this.arrObjTotalOrder.push(objTotalOrder)
  //   this.totalOrders.next(this.arrObjTotalOrder);
  //     console.log('desde addTotalOrder: '+this.arrObjTotalOrder);
  //     return this.arrObjTotalOrder;
    }
}