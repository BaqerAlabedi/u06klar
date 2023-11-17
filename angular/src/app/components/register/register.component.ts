import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regForm:FormGroup;

  constructor(private userService: UserService, private router: Router, public fb: FormBuilder) {this.regForm=this.fb.group({
    name:[], email:[], password:[], password_confirmation: [],
  })}

  register(){
    this.userService.registerUser(this.regForm.value);
    this.router.navigate(['/']);
  }
 
}


