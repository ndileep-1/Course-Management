import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { User } from '../shared/Models/user';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { COMPLETED_COURSES_URL, COMPLETE_COURSE_URL, ENROLLED_COURSES_URL, ENROLL_COURSE_URL, GET_USER_URL, UNENROLL_COURSE_URL, USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { course } from '../shared/Models/CourseModel';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject=new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservale:Observable<User>;
  constructor(private http:HttpClient) {
    this.userObservale=this.userSubject.asObservable();
   }

   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
      tap({
        next:(user)=>{
          alert("login sucess");
          this.userSubject.next(user);
          this.setUserToLocalStorage(user);
        },
        error:(errorResponse)=>{
          alert("invalid details");
        }
      })
    );
   }

   register(userRegister:IUserRegister):Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL,userRegister).pipe(
      tap({
        next:(user)=>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          alert("Your registration successful");
        },
        error:(errorResponse)=>{
          alert("Registration failed");
        }
      })
    );
   }
   
   getUserById(u_id:string):Observable<any>{
    return this.http.get(GET_USER_URL+u_id);
   }

   enrollCourse(u_id:string,c_id:string):Observable<any>{
    const body = {u_id,c_id};
    console.log("in service",u_id,c_id);
    return this.http.put(ENROLL_COURSE_URL,body).pipe(
      tap({
        next:(user)=>{
          console.log("update sucess");
        },
        error:(errorResponse)=>{
          console.log("update failed");
        }
      })
    );
   }

   completeCourse(u_id:string,c_id:string){
    const body = { };
    return this.http.put(COMPLETE_COURSE_URL+u_id+"/"+c_id,body);
   }

   unEnrollCourse(u_id:string,c_id:string){
    const body = { };
    return this.http.delete(UNENROLL_COURSE_URL+u_id+"/"+c_id);
   }

   getEnrolledCourses(id:string){
    return this.http.get<course[]>(ENROLLED_COURSES_URL+id);
   }

   getCompletedCourses(id:string){
    return this.http.get<course[]>(COMPLETED_COURSES_URL+id);
   }

   userCheck(){
    if(localStorage.getItem(USER_KEY))return true;
    return false;
   }

   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    // window.location.reload();
   }

   private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY,JSON.stringify(user));
   }

    getUserFromLocalStorage():User{
    const userJson = localStorage.getItem('User');
    if(userJson)return JSON.parse(userJson) as User;
    return new User();
   }
}
