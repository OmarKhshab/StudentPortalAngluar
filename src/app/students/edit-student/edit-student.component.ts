import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { students } from '../students';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'; 
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private route : ActivatedRoute ,private router : Router ,private fb : FormBuilder ,private studentservice: StudentsService) { }
  student : students;
  studentForm : FormGroup;
  NameMessage:string; 
  GPAMessage:string;
  ImageMessage:string;

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.student = data['studentresolved'],
      error=>{
        alert(error)
      }})
      this.studentForm = this.fb.group({
        name:[this.student.name, [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
        gpa:[this.student.gpa , [Validators.required,Validators.min(0),Validators.max(4)]],
        imgsrc:[this.student.imgsrc , [Validators.required,Validators.minLength(8)]],
        id:[{value: this.student.id ,  disabled: true}]
      });
      this.studentForm.get('name').valueChanges.pipe(
        debounceTime(2000)
      ).subscribe(value=>{this.setNameMeassage(this.studentForm.get('name'))})

      this.studentForm.get('gpa').valueChanges.pipe(
        debounceTime(2000)
      ).subscribe(value=>{this.setGPAMeassage(this.studentForm.get('gpa'))})
      this.studentForm.get('imgsrc').valueChanges.pipe(
        debounceTime(2000)
      ).subscribe(value=>{this.setImageMeassage(this.studentForm.get('imgsrc'))})
  }

  save(){
    console.log(this.studentForm.value);
    this.studentservice.updateStudent({...this.student,...this.studentForm.value}).subscribe(data=>{
      console.log("Saved");
      this.router.navigate(["/student"]),
      (err:any)=>{alert(err)}} )
    
  }

  setImageMeassage(c: AbstractControl) : void{
    this.ImageMessage ='';
    if((c.touched || c.dirty ) && c.errors){
      this.ImageMessage = "Please enter a real url"
    }
  }

  setNameMeassage(c: AbstractControl) : void{
    this.NameMessage ='';
    if((c.touched || c.dirty ) && c.errors){
      this.NameMessage = "Please enter a valid name"
    }
  }

  setGPAMeassage(c: AbstractControl) : void{
    this.GPAMessage ='';
    if((c.touched || c.dirty ) && c.errors){
      this.GPAMessage = "Please enter a value between 0 and 4";
    }
  }

  delete():void{
    this.studentservice.DeleteStudent(this.student.id).subscribe(
      ()=>{
        console.log("deleted");
        this.router.navigate(["/student"]),
        (err:any)=>{alert(err)};
      }
    );
  }
  valid(){
    if(JSON.stringify(this.student) === JSON.stringify({...this.student,...this.studentForm.value}) )
    return true;
    else
    return false;
  }
}
