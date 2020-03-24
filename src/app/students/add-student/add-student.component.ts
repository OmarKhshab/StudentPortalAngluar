import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { StudentsService } from '../students.service';
import { students } from '../students';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private studentservice: StudentsService) { }
  student: students = new students;
  studentForm: FormGroup;
  NameMessage: string;
  GPAMessage: string;
  ImageMessage: string;
  students: students[];
  New_id: number;

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.students = data['newid'],
      (err:any)=>{alert(err)};
    })

    this.New_id = this.students[this.students.length - 1].id;
    this.student.id = this.New_id+1;
    this.student.name=null;
    this.student.gpa=null;
    this.student.imgsrc=null;
    this.studentForm = this.fb.group({
      name: [this.student.name, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      gpa: [this.student.gpa, [Validators.required, Validators.min(0), Validators.max(4)]],
      imgsrc: [this.student.imgsrc, [Validators.required, Validators.minLength(8)]],
      id: [{ value: this.student.id, disabled: true }]
    });
    this.studentForm.get('name').valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(value => { this.setNameMeassage(this.studentForm.get('name'))
                            this.student.name = value })

    this.studentForm.get('gpa').valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(value => { this.setGPAMeassage(this.studentForm.get('gpa')) 
                          this.student.gpa = value})
    this.studentForm.get('imgsrc').valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(value => { this.setImageMeassage(this.studentForm.get('imgsrc')) 
                          this.student.imgsrc = value})

      console.log(JSON.stringify(this.student));
      console.log(JSON.stringify({...this.student,...this.studentForm.value}));
  }

  setImageMeassage(c: AbstractControl): void {
    this.ImageMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.ImageMessage = "Please enter a real url"
    }
  }

  setNameMeassage(c: AbstractControl): void {
    this.NameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.NameMessage = "Please enter a valid name"
    }
  }

  setGPAMeassage(c: AbstractControl): void {
    this.GPAMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.GPAMessage = "Please enter a value between 0 and 4";
    }
  }

  save() {
    console.log(this.student);
    this.studentservice.Addstudent(this.student).subscribe(data=>{
      console.log("added");
      this.router.navigate(["/student"]),
      (err:any)=>{alert(err)};
    })
  }

  valid(){
    if(JSON.stringify(this.student) === JSON.stringify({...this.student,...this.studentForm.value}) ){
    return true;}
    else
    return false;
  }
}
