import { Injectable } from '@angular/core';
import { student } from './student';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  student: student;
  loged_in: boolean = false;
  constructor() { }

  login(): void {

    this.loged_in = true;
  }

  logout(): void {

    this.loged_in = false;
  }
}
