import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  configURL = "http://localhost:8000/api/";
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '
    })
  }

  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user: User) {
    this.http.post<any>(this.configURL + "login", user, this.httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(res => {
        console.log(res);
        const token = res.token; 
        localStorage.setItem("token", token);
        this.setToken(token); 
        this.isLoggedIn = true; 
        this.router.navigate(['/welcome'], { queryParams: { userName: user.name } });
      });
  }
  
  setToken(token: string) {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', `Bearer ${token}`);
  }

  logoutUser() {
    localStorage.removeItem("token");
    this.isLoggedIn = false;
    console.log("logged out");
  }

  registerUser(user: User) {
    this.http.post<any>(this.configURL + "register", user, this.httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(res => {
        console.log(res);
      })
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {

      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
