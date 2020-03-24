import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-component/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private loginservice : LoginService) { }
  student = this.loginservice.student;

  ngOnInit(): void {
  }

}
