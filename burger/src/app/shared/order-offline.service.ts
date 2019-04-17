import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderOfflineService {
  private totalOrders = new BehaviorSubject([]);
  totalOrder = this.totalOrders.asObservable();

  private totalCashs = new BehaviorSubject(0);
  totalCash = this.totalCashs.asObservable();
  products = [];

  constructor() { }

  addTotalOrder(objTotalOrder: {}) {
    this.products = [...this.products, objTotalOrder];
    this.totalOrders.next(this.products);
  }

  deleteProduct(id: String){
    this.products = this.products.filter(element => {
      return (element.id !== id);
    });
    this.totalOrders.next(this.products);
  }

  changeCant(cant: number, price: number, id: String) {
    this.products = this.products.map(element => {
      if (element.id === id){
        return {
          ...element,
          cant: cant,
          total: cant*price
        }
      }
      return element;
    });
    this.totalOrders.next(this.products);
  }
  changeTotal(products){
    console.log(products)
    const sum = products.total.reduce((a , b) => a + b);
    console.log(sum);    
    this.totalCashs.next(sum);

  }
}