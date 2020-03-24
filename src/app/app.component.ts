import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-component/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'student-portal'; 

  constructor(private loginservice: LoginService){}
  ngOnInit(): void {
    console.log(this.isLoggedIn());
  }

  isLoggedIn():boolean{
    return this.loginservice.loged_in;
  }
  logingin(){
    this.loginservice.login();
  }
  logingout(){
    this.loginservice.logout();
  }
}
