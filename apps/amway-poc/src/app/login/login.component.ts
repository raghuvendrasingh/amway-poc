import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'poc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Auth: AuthService
  ) {}
  ngOnInit(): void {}
  LoginUser(event) {
    event.preventDefault();
    this.Auth.getUserDetails(this.username, this.password).subscribe({
      next: (data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem('isLoggedIn', '1');
          this.Auth.setLoggedIn = data.success;
          this.router.navigate(['/adminuser']);
        } else {
          localStorage.removeItem('isLoggedIn');
          alert('Invalid creds');
        }
      },
    });
  }
}
