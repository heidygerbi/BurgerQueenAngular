import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit {
  date = Date();
  typeMenu = 'Desayuno';
  constructor() { }
  ngOnInit() {
  }
}