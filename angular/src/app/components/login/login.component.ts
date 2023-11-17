import { Component } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importera Validators

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private httpClient: HttpClient, public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Lägg till Validators
      password: ['', Validators.required] // Lägg till Validators
    });
  }

  me = {
    id: 0,
    name: "",
    email: "seb@seb.seb",
    password: "sebsebseb",
  }

  login() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value);
      this.router.navigate(['/']);
    } else {
    }
  }
}
