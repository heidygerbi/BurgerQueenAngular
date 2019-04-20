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

  private menuLists = new BehaviorSubject('');
  menuList = this.menuLists.asObservable();
  
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
  changeTotal(){
    const arrTotal=[];
    this.products.filter(element => arrTotal.push(element.total));
    const sum= arrTotal.reduce((a , b) => a + b, 0);
    this.totalCashs.next(sum);

  }
  typeMenu(initialD: number, initialA: number){
    let hours = new Date().getHours();
    let menu = '';
    if(hours >=initialD && hours < initialA) menu = 'D';
    else menu = 'A';
    this.menuLists.next(menu);
  }
}
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class OrderOfflineService {

//   constructor() { }
// }
