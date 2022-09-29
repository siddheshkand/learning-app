import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.counter = this.counter + 1;
  }

  sub() {
    this.counter = this.counter - 1;
  }
}
