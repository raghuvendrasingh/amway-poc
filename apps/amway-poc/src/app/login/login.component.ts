import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  ngOnInit(): void {}
  LoginUser() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login');
    }
  }
}
