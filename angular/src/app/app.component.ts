import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe';
  logoutMessageVisible: boolean = false;
  isLoggedIn: boolean = false;

  me = {
    id: 0,
    name: "",
    email: "bager@bager",
    password: "bager124",
  }

  user2 = {
    id: 0,
    name: "",
    email: "",
    password: "",
  }

  constructor(private userService: UserService, private router: Router) {
    this.isLoggedIn = localStorage.getItem("token") !== null;
  }
  
  logout() {
    this.userService.logoutUser();
    this.router.navigate(['/logout']); 
  }
}
