import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderOfflineService {
  arrObjTotalOrder = [];
  private totalOrderSource = new BehaviorSubject({});
  currentTotalOrder = this.totalOrderSource.asObservable();

  constructor() { }
  addTotalOrder(objTotalOrder: {}) {
    // this.arrObjTotalOrder.slice().push(objTotalOrder);
    //aqui se debe hacer una copia del array original
    //acumular objetos
    //hacer nuevo arr de order y enviarlo con next
    this.arrObjTotalOrder.push(objTotalOrder)
      this.totalOrderSource.next(this.arrObjTotalOrder);
      console.log(this.arrObjTotalOrder);

    }
}