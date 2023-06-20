import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesdataService } from 'src/app/services/coursesdata.service';
import { UserService } from 'src/app/services/user.service';
import { course } from 'src/app/shared/Models/CourseModel';
import { User } from 'src/app/shared/Models/user';

@Component({
  selector: 'app-enrolled-courses-page',
  templateUrl: './enrolled-courses-page.component.html',
  styleUrls: ['./enrolled-courses-page.component.css']
})
export class EnrolledCoursesPageComponent implements OnInit{
  courses:course[] = [];
  complted_course_ids:string[]=[];
  user:any;
  constructor(private UInfo:UserService,activatedRoute:ActivatedRoute,private router:Router){
    let coursesObservable:Observable<course[]>;
    this.user = localStorage.getItem("User");
    if(!this.user){
      alert("Login to view the enrolled courses...");
      this.router.navigateByUrl("/login");
    }
    this.user = JSON.parse(this.user) as User;
    this.complted_course_ids=this.user.completed_courses;
    // console.log(this.complted_course_ids);
    activatedRoute.params.subscribe((params)=>{
      coursesObservable = this.UInfo.getEnrolledCourses(this.user._id);

      coursesObservable.subscribe((serverCourse)=>{
        this.courses = serverCourse;
        // console.log(this.courses);
      });
    });
  }
  ngOnInit(){
    
  }
}
