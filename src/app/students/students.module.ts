import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ AddStudentComponent, EditStudentComponent , AllStudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentsModule { }
