import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesdataService } from 'src/app/services/coursesdata.service';
import { UserService } from 'src/app/services/user.service';
import { course } from 'src/app/shared/Models/CourseModel';
import { tag } from 'src/app/shared/Models/TagModel';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {
  courses:course[] = [];
  tags:tag[] = [];
  user:any;
  isAdmin=false;
  constructor(private CInfo:CoursesdataService,activatedRoute:ActivatedRoute,private userService:UserService){
    
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
  ngOnInit(){
    this.userService.userObservale.subscribe((newUser)=>{
      this.user = newUser;
      this.isAdmin=this.user.isAdmin;
    });
  }
}