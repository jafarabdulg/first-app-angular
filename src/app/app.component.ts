import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  todosParent: any[] = [];

  name: string = '';
  description: string = '';
  isDone: boolean = false;

  onKeyPress(event: any): void{
    if (event.target.id === 'todo') {
      this.name = event.target.value;
    } else {
      this.description = event.target.value;
    }
  }

  submit(): void{
    const todo = {
      name: this.name,
      description: this.description,
      isDone: this.isDone
    }
    this.todosParent.push(todo);
  }
}
