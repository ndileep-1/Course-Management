import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesdataService } from 'src/app/services/coursesdata.service';
import { UserService } from 'src/app/services/user.service';
import { course } from 'src/app/shared/Models/CourseModel';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent {
  c_id!:any;
  name:any;
  instructor: any;
  tags:any;
  description:any;
  topics:any;
  imageurl:any;
  course!: any;
  user:any;
  enrolled=false;
  completed=false;
  constructor(
    private activatedRoutes:ActivatedRoute,
    private router:Router,
    private CInfo:CoursesdataService,
    private UInfo:UserService)
    {
      this.user=this.UInfo.getUserFromLocalStorage();
      this.UInfo.getUserById(this.user._id).subscribe((user)=>{
        this.user=user;
      })
      this.activatedRoutes.params.subscribe((params)=>{
        this.c_id=params.id;
        this.setCourse(this.c_id);
      });
  }

  setCourse(c_id: any){
    this.CInfo.getCourseById(c_id).subscribe(course =>{
      this.course=course;
      this.setData(course);
    })
  }

  setData(course:any){
    // console.log(this.user);
    // console.log(course);
    if(this.user.enrolled_courses.indexOf(this.course._id) === -1){
      this.enrolled=false;
      this.completed=false;
    }
    else{
      this.enrolled=true;
      if(this.user.completed_courses.indexOf(this.course._id) === -1)this.completed=false;
      else this.completed=true;
    }
    this.imageurl=course.imageUrl;
    this.name=course.name;
    this.instructor=course.instructor;
    this.tags=course.tags;
    this.description=course.description;
    this.topics=course.topics;
  }

  enroll(c_id:string){
  const u_id=this.user._id;
  console.log(u_id,c_id);
  this.UInfo.enrollCourse(u_id,c_id).subscribe((ack)=>{
    alert("Successfully registered for the course");
    this.router.navigateByUrl("/");
  });
}

unenroll(c_id:string){
  const u_id=this.user._id;
  this.UInfo.unEnrollCourse(u_id,c_id).subscribe((res)=>{
    alert("you have with drawn for a course");
    this.router.navigateByUrl("/");
  });
}

complete(c_id:string){
  const u_id=this.user._id;
  this.UInfo.completeCourse(u_id,c_id).subscribe((res)=>{
    alert("you have marked a course as complete");
    this.router.navigateByUrl("/");
  })
}

}
//         let e_ind = this.user.enrolled_courses.indexOf(this.course._id);
//         let c_ind = this.user.completed_courses.indexOf(this.course._id);
//         if(e_ind === -1)this.enrolled=false;
//         else this.enrolled=true;
//         if(c_ind === -1)this.completed=false;
//         else this.completed=true;
//         console.log(e_ind,c_ind);

// constructor(activatedRoute:ActivatedRoute,courseService:CoursesdataService,private userService:UserService){
//   this.enrolled=false;
//   this.completed=false;
//   let coursesObservable:Observable<course>;
//   this.userService.userObservale.subscribe((newUser)=>{
//     this.user = newUser;
//     console.log("enrolled courses",this.user.enrolled_courses);
//     // console.log("nginit",this.e_ind,this.c_ind);
//   });
//   activatedRoute.params.subscribe((params)=>{
//       if(params.id)coursesObservable = courseService.getCourseById(params.id);
//       coursesObservable.subscribe((serverCourse)=>{
//       this.course = serverCourse;
//       this.e_ind = this.user.enrolled_courses.indexOf(this.course.id);
//       this.c_ind = this.user.completed_courses.indexOf(this.course.id);
//       if(this.e_ind === -1)this.enrolled=false;
//       else this.enrolled=true;
//       if(this.c_ind === -1)this.completed=false;
//       else this.completed=true;
//     });
//   });
  
// }
// ngOnInit(){
  
// }






