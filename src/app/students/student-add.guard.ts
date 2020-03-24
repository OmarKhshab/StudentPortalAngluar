import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AddStudentComponent } from './add-student/add-student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentAddGuard implements CanDeactivate<AddStudentComponent> {
  
  canDeactivate(component: AddStudentComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!component.valid())
    return confirm(`Navigate awy and lose all the changes`);
    else
    return true;
  }

}
