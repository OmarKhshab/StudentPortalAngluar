import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginGuard } from '../login-component/login.guard';
import { StudentResolverService } from './student-resolver.service';
import { FinalIDResloverService } from './final-id-reslover.service';
import { StudentEditGuard } from './student-edit.guard';
import { StudentAddGuard } from './student-add.guard';


@NgModule({
  imports: [    
    RouterModule.forChild([
    { path:"", component : AllStudentsComponent ,  pathMatch: 'full'},
    
    {path:":add" ,  component : AddStudentComponent , canActivate : [LoginGuard] , resolve : {newid : FinalIDResloverService } ,canDeactivate : [StudentAddGuard]},
    {path:":id/edit", component :  EditStudentComponent , resolve : {studentresolved : StudentResolverService} , canDeactivate : [StudentEditGuard]}
  ])
],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
