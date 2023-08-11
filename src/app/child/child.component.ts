import {Component, EventEmitter, Input, Output} from '@angular/core';
import {count} from "rxjs";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childTitle: string = '';
  // @Output() onChanged = new EventEmitter<number>();

  @Input()
  myName: string = '';
  @Output()
  myNameChange = new EventEmitter<string>();
  myNameChanges() {
    this.myNameChange.emit(this.myName);
  }

  // clickCount: number = 0;
  // countChange() {
  //   this.clickCount++;
  //   this.onChanged.emit(this.clickCount);
  // }
}
