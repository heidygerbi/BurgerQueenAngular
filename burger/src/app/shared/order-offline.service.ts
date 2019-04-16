import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderOfflineService {
  private totalOrders = new BehaviorSubject([]);
  totalOrder = this.totalOrders.asObservable();
  productos = [];

  constructor() { }

  addTotalOrder(objTotalOrder: {}) {
    this.productos = [...this.productos, objTotalOrder];
    this.totalOrders.next(this.productos);
  }

  deleteProduct(id: String){
    this.productos = this.productos.filter(element => {
      return (element.id !== id);
    });
    this.totalOrders.next(this.productos);
  }

  changeCant(cant: number, price: number, id: String) {
    this.productos = this.productos.map(element => {
      if (element.id === id){
        return {
          ...element,
          cant: cant,
          total: cant*price
        }
      }
      return element;
    });
    this.totalOrders.next(this.productos);
  }
}