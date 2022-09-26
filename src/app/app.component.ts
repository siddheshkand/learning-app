import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-app';
  counter = 0;

  add() {
    this.counter = this.counter + 1;
  }

  sub() {
    this.counter = this.counter - 1;
  }
}
