import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StudentsService } from './students.service';
import { students } from './students';

@Injectable({
  providedIn: 'root'
})
export class FinalIDResloverService implements Resolve<students[]> {

  constructor(private studentservice : StudentsService) { }
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): students[] | import("rxjs").Observable<students[]> | Promise<students[]> {
    return this.studentservice.getStudents();
  }

 
}
