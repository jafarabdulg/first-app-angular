import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {
    console.log('Constructor working');
  }

  ngOnInit(){
    console.log('ngOnInit');
    this.tick();
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    clearInterval(this.intervalId);
  }

  id = 0;
  intervalId: any;
  tick(){
    this.intervalId = setInterval(() => {
      this.id++;
    }, 1000);
  }

  emailInput: string = '';
  passwordInput: string = '';

  auth() {
    if (this.emailInput === 'admin@gmail.com' && this.passwordInput === 'admin') {
      alert('login success');
      this.router.navigate(['dashboard']);
    } else {
      alert('login failed');
    }
    console.log(this.emailInput, this.passwordInput);
  }
}
