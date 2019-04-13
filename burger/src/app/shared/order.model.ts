import { Time } from '@angular/common';

export class Order {
    id: string;
    item: string;
    its: string;
    price: number;
}
export class Ticket {
    client: string;
    dateTime: Time;
    numTable: number;
    numOrder: number;
}
export class OrderList {
    id: string;
    item: string;
    its: string;
    price: number;
}