import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'poc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}
  LoginUser() {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isLoggedIn', '1');
      this.router.navigate(['/adminuser']);
    } else if (this.username === 'user' && this.username === 'user') {
      localStorage.setItem('isLoggedIn', '1');
      this.router.navigate(['/normaluser']);
    }
  }
}
