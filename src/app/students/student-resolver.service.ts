import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { students } from './students';
import { StudentsService } from './students.service';

@Injectable({
  providedIn: 'root'
})
export class StudentResolverService implements Resolve<students>{

  constructor(private studentsservice : StudentsService) { }
  
  resolve( route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): students | import("rxjs").Observable<students> | Promise<students> {
    const id = route.paramMap.get('id');
    if(isNaN(+id))
    {
      console.log('error');
      return null;
    }
    else {
      return this.studentsservice.getStudent(id);
    }
  }
}
