import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { CoursesdataService } from 'src/app/services/coursesdata.service';
import { course } from 'src/app/shared/Models/CourseModel';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})
export class ModifyCourseComponent {
  c_id='';
  myform!:FormGroup;
  isSubmitted=false;
  name = new FormControl();
  course!:any;
  imageurl!:any;
  constructor(
    private activatedRoutes:ActivatedRoute,
    private courseservice:CoursesdataService,
    private formBuilder: FormBuilder,
    private AInfo:AdminservicesService,
    private router: Router){

    activatedRoutes.params.subscribe((params)=>{
      if(params.id){
        this.c_id=params.id;
        this.getData(params);
      }
    });

  }
  getData(params:any){

    this.courseservice.getCourseForAdmin(params.id).subscribe((course)=>{
        this.course= course;
        this.dataDispaly();
    });

    
   
    
  }
  dataDispaly(){
    const tags=this.course.tags.toString();
    const topics=this.course.topics.toString();
    this.myform = this.formBuilder.group({
        name:[this.course.name,[Validators.required]],
        instructor: [this.course.instructor,[Validators.required]],
        tags:[tags,[Validators.required]],
        description:[this.course.description,[Validators.required]],
        topics:[topics,[Validators.required]],
        imageurl:[this.course.imageUrl,[Validators.nullValidator]],
      });
  }

  ngOnInit():void{
    console.log("oninit");
    console.log("coursess...",this.course);
    this.myform = this.formBuilder.group({
      name:new FormControl(),
      instructor: new FormControl(),
      tags:new FormControl(),
      description:new FormControl(),
      topics:new FormControl(),
      imageurl:new FormControl(),
    });
}

get fc(){
  return this.myform.controls;
}
editCourse(){
  this.isSubmitted=true;
  if(this.myform.invalid)return;
  const fv=this.myform.value;
  const body:any={
    "id":this.c_id,
    "name":fv.name,
    "instructor":fv.instructor,
    "tags":fv.tags,
    "description":fv.description,
    "topics":fv.topics,
    "imageUrl":fv.imageurl
  };
  this.AInfo.editCourse(body).subscribe((res)=>{
    console.log(body);
    console.log(res);
    this.router.navigateByUrl("/admin/searchcourse");
  })
}
removeCourse(){
  this.AInfo.removeCourse(this.course._id).subscribe((res)=>{
    console.log(res);
    this.router.navigateByUrl("/admin/searchcourse");
  })
}

}