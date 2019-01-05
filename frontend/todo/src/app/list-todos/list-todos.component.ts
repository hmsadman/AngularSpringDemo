import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description : string,
    public targetDate: Date,
    public isDone: boolean
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[]
  // todos = [
  //   new Todo(1,'in28minutes',false, new Date()),
  //   new Todo(2,'weekii',true, new Date()),
  //   new Todo(3,'looky',true, new Date()),
  //   new Todo(4,'mooky',false, new Date()),

 
  // ]
  message : string
  constructor(private service: TodoDataService, private router : Router) { }

  ngOnInit() {
    this.refreshTodoList();
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.service.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete ${id} successful`;
        this.refreshTodoList();

      }
    )
  }

  updateTodo(id) {
    console.log(`delete todo ${id}`);
    this.router.navigate(['todos',id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

  refreshTodoList() {
    this.service.retrieveAllTodos('in28minutes').subscribe(
      response => {
        this.todos = response;
      }
    )
  }
}
