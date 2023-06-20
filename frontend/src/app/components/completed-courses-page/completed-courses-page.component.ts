import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { course } from 'src/app/shared/Models/CourseModel';
import { User } from 'src/app/shared/Models/user';

@Component({
  selector: 'app-completed-courses-page',
  templateUrl: './completed-courses-page.component.html',
  styleUrls: ['./completed-courses-page.component.css']
})
export class CompletedCoursesPageComponent {
  courses:course[] = [];
  user:any;
  constructor(private UInfo:UserService,activatedRoute:ActivatedRoute,private router:Router){
    let coursesObservable:Observable<course[]>;
    this.user = localStorage.getItem("User");
    if(!this.user){
      alert("Login to view the enrolled courses...");
      this.router.navigateByUrl("/login");
    }
    this.user = JSON.parse(this.user) as User;
    activatedRoute.params.subscribe((params)=>{
      coursesObservable = this.UInfo.getCompletedCourses(this.user._id);

      coursesObservable.subscribe((serverCourse)=>{
        this.courses = serverCourse;
        // console.log(this.courses);
      });
    });
  }
}
