import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todoTask ="Apple";

  listOfItems:string[] = [];

  ngOnInit(): void {
  }

  addItem(){
    this.listOfItems.push(this.todoTask);
    this.todoTask = "";
  }
}
