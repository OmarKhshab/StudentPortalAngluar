import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { students } from './students';
import { tap, map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url : string  = 'api/students'

  constructor(private http : HttpClient) { }

  getStudents() : Observable<students[]> {
    return this.http.get<students[]>(this.url)
  }

  getStudent(id) : Observable<students> {
    return this.http.get<students>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateStudent(student:students) : Observable<students>{
    return this.http.put<students>(`${this.url}/${student.id}`,student)
    .pipe(
      tap(() => console.log('updatestudent: ' + student.id)),
      // Return the Student on an update      
      map(() => student),
      catchError(this.handleError)
      
    );
  }

  DeleteStudent(id:number) : Observable<students>{
    return this.http.delete<students>(`${this.url}/${id}`)
    .pipe(
      tap(() => console.log('Deletestudent: ' + id)),
      catchError(this.handleError)      
      );
  }

  Addstudent(student:students){
    return this.http.post(this.url,student).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
