import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditStudentComponent } from './edit-student/edit-student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentEditGuard implements CanDeactivate<EditStudentComponent> {
  
  canDeactivate(component: EditStudentComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!component.valid())
    return  confirm(`Please Confirm these Changes`);
    else 
    return true;
  }
  
  
  
}
