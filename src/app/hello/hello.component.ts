import {Component} from "@angular/core";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent{
  name: string = 'Jafar A G';
  message: string = 'This is message';

  getMessage(): string {
    return this.message;
  }

  people: string[] = ['Fauzan', 'Edy', 'Heru', 'Ibnu'];

  getPeople(): string {
    let result = '';
    for (const person of this.people) {
      result += person + ", ";
    }
    result += 'selesai dilooping';
    return result;
  }

  employees = [
    {
      name: 'Jafar',
      address: 'Jakarta Selatan'
    },
    {
      name: 'Mel',
      address: 'Bekasi'
    }
  ];
}
