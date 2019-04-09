import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Order, Client } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData :Order;
  formDataClient :Client;
  
  constructor(private firestore:AngularFirestore) { }

  getOrders(){
    return this.firestore.collection('orders').snapshotChanges();
  }
  getTickets(){
    return this.firestore.collection('ticket').snapshotChanges();
  }
}
