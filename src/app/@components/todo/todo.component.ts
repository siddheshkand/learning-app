import { Component, OnInit } from '@angular/core';

interface TodoI {
  completed: boolean;
  taskName: string;
}

// class TodoC {

//   completed: boolean = false;
//   taskName: string = '';

//   constructor(task:string){
//     this.taskName = task;
//   }

//   getCountOfTaskChars() {
//     return this.taskName.length;
//   }
// }


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todoTask = "Apple";

  // listOfItems:string[] = [];
  listOfItems: TodoI[] = [];

  ngOnInit(): void {
  }

  addItem() {
    if (this.todoTask.length > 0) {
      // this.listOfItems.push(new TodoC(this.todoTask));
      this.listOfItems.push({completed:true,taskName: this.todoTask});
      this.todoTask = "";
    }
  }
}
