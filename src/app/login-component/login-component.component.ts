import { Component, OnInit } from '@angular/core';
import { student } from './student';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor( private loginservice : LoginService ,private router : Router) { }

  Student = new student();

  submit(){
    this.loginservice.student = this.Student;
    this.loginservice.login();
    this.router.navigate(['/welcome'])
    console.log(this.loginservice.loged_in)
  }

  
  ngOnInit(): void {
  }
}
