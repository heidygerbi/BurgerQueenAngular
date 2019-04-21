import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Order, Ticket, User } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData: Order;
  formDataTicket: Ticket;
  formUser: User;
  constructor(private firestore:AngularFirestore) { }

  getOrders(){
    return this.firestore.collection('orders').snapshotChanges();
  }
  getTickets(){
    return this.firestore.collection('ticket').snapshotChanges();
  }
  getUser(){
    return this.firestore.collection('user').snapshotChanges();
  }
}