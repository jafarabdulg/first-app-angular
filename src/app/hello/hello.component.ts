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

  imgSrc: string = 'assets/images/welcome.png';
  imgAlt: string = 'welcome-picture';

  date: string = '<i>August 7, 2023</i>';

  styles = {
    fontSize: '26px',
    color: 'cadetblue'
  }

  isDisabled: boolean = false;

  info: string = '';

  ngOnInit() {
    setTimeout(() => {
      this.isDisabled = !this.isDisabled;
      this.info = 'Sudah 2 detik, tombol tidak bisa diklik!';
    }, 2000);
  }

  likeCounter: number = 0;
  increment() {
    this.likeCounter++;
  }

  counter: number = 0;
  counterColor = 'blue';
  intervalId : any;
  startCounter() {
      this.intervalId = setInterval(() => {
        this.counter++;
        if (this.counter >= 5) {
          this.counterColor = 'red';
        }
      }, 1000);
  }

  stopCounter() {
    clearInterval(this.intervalId);
    this.counter = 0;
    this.counterColor = 'blue';
  }
}
