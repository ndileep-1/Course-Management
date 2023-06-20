import { Injectable } from '@angular/core';
import { course } from '../shared/Models/CourseModel';
import { HttpClient } from '@angular/common/http';
import { ADD_COURSE_URL, COURSES_BY_ID_URL, EDIT_COURSE_URL, REMOVE_COURSE_URL } from '../shared/constants/urls';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {

  constructor(private http:HttpClient) { }

  addCourse(course:course):Observable<any>{
     return this.http.post(ADD_COURSE_URL,course).pipe(
      tap({
        next:()=>{
          alert("Your course registration successful");
        },
        error:(errorResponse)=>{
          alert("Registration failed");
        }
      })
    );;
  };

  getCourse(id:string){
    return this.http.get(COURSES_BY_ID_URL+id).subscribe(ack=>{
      console.log(ack);
    })
  }

  editCourse(course:any):Observable<any>{
    return this.http.put(EDIT_COURSE_URL+course.id,course).pipe(
      tap({
        next:()=>{
          alert("Your course modified successful");
        },
        error:(errorResponse)=>{
          alert("Failed to modify the course");
        }
      })
    )
  };

  removeCourse(id:string):Observable<any>{
    return this.http.delete(REMOVE_COURSE_URL+id).pipe(
      tap({
        next:()=>{
          alert("Your course deleted successful");
        },
        error:(errorResponse)=>{
          alert("Failed to delete the course");
        }
      })
    );
  };


}
