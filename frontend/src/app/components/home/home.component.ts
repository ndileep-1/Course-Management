import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesdataService } from 'src/app/services/coursesdata.service';
import { UserService } from 'src/app/services/user.service';
import { course } from 'src/app/shared/Models/CourseModel';
import { tag } from 'src/app/shared/Models/TagModel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  courses:course[] = [];
  tags:tag[] = [];
  user:any;
  constructor(private CInfo:CoursesdataService,private UInfo:UserService,private router:Router,activatedRoute:ActivatedRoute){
    let coursesObservable:Observable<course[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      coursesObservable = this.CInfo.getDataBySearch(params.searchTerm);
      else if(params.tag)
      coursesObservable = this.CInfo.getCourseByTag(params.tag);
      else
      coursesObservable = this.CInfo.getData();

      coursesObservable.subscribe((serverCourse)=>{
        this.courses = serverCourse;
      })
    })
  }
  
  viewCourse(courseId:any){
    this.user=this.UInfo.getUserFromLocalStorage();
    if(this.UInfo.userCheck()){
   //   console.log("user is there");
      if(this.user.isAdmin) this.router.navigateByUrl("admin/searchcourse/modify/"+courseId);
      else this.router.navigateByUrl("course/"+courseId);
    }
    else{
      alert("Login to view the course details....");
      return;
    }
  }
  
}
