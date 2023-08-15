import { Component } from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {ToDo} from "../../model/todo";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(private readonly service: TodoService) {}

  ngOnInit(){
    this.todos = this.service.getTodos();
  }

  // to-do list form
  toDoForm: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * (100 - 1) + 1).toString()),
    name: new FormControl(null, Validators.required),
    description: new FormControl()
  });
  // Form to update todo
  updateToDoForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(null, Validators.required),
    description: new FormControl()
  });

  todos: ToDo[] = [];
  todoById: ToDo = {
    id: '',
    name: '',
    description: ''
  }
  showTodoById = false;
  submitToDo(todo: ToDo): void{
    this.service.create(todo);
    this.getAllToDo();
    this.toDoForm.reset();
  }
  getAllToDo(): void{
    this.todos = this.service.getTodos();
  }
  getToDoById(id: string): void{
    this.todoById = this.service.getToDoById(id);
    this.updateToDoForm.setValue({
      id: this.todoById.id,
      name: this.todoById.name,
      description: this.todoById.description
    });
    this.showTodoById = true;
  }
  updateToDo(): void{
    const updatedTodo = this.updateToDoForm.value;
    this.service.updateToDo(updatedTodo);
    this.getAllToDo();
    this.cancelDetails();
    // console.log(this.todos)
  }
  deleteToDo(id: string): void{
    const confirm: boolean = window.confirm('are you sure?');
    if (confirm) {
      this.service.deleteToDoById(id);
      this.getAllToDo();
    }
  }

  // Utils
  cancelDetails(): void{
    this.showTodoById = !this.showTodoById;
  }

  onKeyPressUpdate(event: any): void{
    if (event.target.id === 'updatedName') {
      this.todoById.name = event.target.value;
    } else if (event.target.id === 'updatedDesc') {
      this.todoById.description = event.target.value;
    } else {
      alert('error!');
    }
  }

}
