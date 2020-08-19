import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInStatus = JSON.parse(
    localStorage.getItem('isLoggedIn') || 'false'
  );
  get isLoggedIn() {
    return (
      JSON.parse(localStorage.getItem('isLoggedIn')) || this.loggedInStatus
    );
  }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }
  constructor(private http: HttpClientModule) {}
  getUserDetails(username, password) {
    //return user info if correct login pwd
    console.log(username, password);
    let observable = Observable.create((observer) => {
      setTimeout(() => {
        if (
          username.localeCompare('admin') === 0 &&
          password.localeCompare('admin') === 0
        ) {
          this.loggedInStatus = true;
        }
        let loginResult = { success: this.loggedInStatus };

        observer.next(loginResult);
        observer.complete();
      }, 0);
    });
    return observable;
  }
}
