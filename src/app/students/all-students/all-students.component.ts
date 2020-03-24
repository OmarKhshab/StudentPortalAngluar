import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { students } from '../students';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  constructor( private studentservice : StudentsService) { }

  students : students[]  = [];

  ngOnInit(): void {
    this.studentservice.getStudents().subscribe({
      next: students =>{
        this.students = students,
        (err:any)=>{alert(err)};
      }
    })
  }

}
