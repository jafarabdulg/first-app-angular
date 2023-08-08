import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  emailInput: string = '';
  passwordInput: string = '';

  auth() {
    // if (this.emailInput === 'admin@gmail.com' && this.passwordInput === 'admin') {
    //   alert('login success');
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   alert('login failed');
    // }
    this.router.navigate(['dashboard']);
    console.log(this.emailInput, this.passwordInput);
  }
}
