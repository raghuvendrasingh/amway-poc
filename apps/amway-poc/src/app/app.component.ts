import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'hybris-amway-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {}
  title = 'amway-poc';
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  ngOnInit() {
    if (+localStorage.getItem('isLoggedIn')) {
      this.isLoggedIn.next(true);
    }
  }
  logout() {
    this.auth.setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
