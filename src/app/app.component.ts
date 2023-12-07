import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoList';
  todoList: any[] = [];
  todoTitle = '';
  constructor() {

  }
  addTodoList(): void {
    const temp = {
      title: this.todoTitle,
      completed: false
    };
    this.todoList.push(temp);
  }
  
  removeTodoList(row: any): void {
    this.todoList = this.todoList.filter((e: any)=>{
      return e.title != row.title;
    })
  }
}
