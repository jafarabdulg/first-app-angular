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
    },
    {
      id: '002',
      name: 'Berenang',
      description: 'Berenang selama 1 jam'
    }
  ]

  getTodos(): ToDo[]{
    return this.todos;
  }
}
