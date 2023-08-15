import { Injectable } from '@angular/core';
import {ToDo} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todos: ToDo[] = [
    {
      id: '001',
      name: 'Belajar',
      description: 'Belajar angular'
    }
  ];

  create(todo: ToDo): void{
    this.todos.push(todo);
  }
  getTodos(): ToDo[]{
    return this.todos;
  }
  getToDoById(id: string): ToDo{
    const index: number = this.todos.findIndex(todo => todo.id === id);
    return this.todos[index];
  }
  updateToDo(updateToDo: ToDo): void{
    const index: number = this.todos.findIndex(todo => todo.id === updateToDo.id);
    // console.log(index);
    // console.log(updateToDo.id)
    this.todos[index] = updateToDo;
  }

  deleteToDoById(id: string): void{
    const index: number = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
  }
}
