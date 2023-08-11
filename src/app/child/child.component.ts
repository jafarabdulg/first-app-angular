import {Component, EventEmitter, Input, Output} from '@angular/core';
import {count} from "rxjs";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childTitle: string = '';

  @Output() onChanged = new EventEmitter<number>();

  clickCount: number = 0;

  countChange() {
    this.clickCount++;
    this.onChanged.emit(this.clickCount);
  }
}
