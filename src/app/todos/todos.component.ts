import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todos: any[] = [];

  delete(index: number): void{
    const confirmed: boolean = window.confirm("are you sure?");
    if (confirmed) {
      this.todos.splice(index, 1);
    }
  }

  done(index: number): void {
    this.todos[index].isDone = !this.todos[index].isDone;
  }
}
