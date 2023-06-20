import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { course } from 'src/app/shared/Models/CourseModel';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  myform!:FormGroup;
  isSubmitted=false;
  returnUrl = '';
 
  constructor(
    private formBuilder: FormBuilder,
    private AInfo:AdminservicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){
  }

  ngOnInit():void{

    this.myform = this.formBuilder.group({
      name:['',[Validators.required]],
      instructor: ['',[Validators.required]],
      tags:['',[Validators.required]],
      description:['',[Validators.required]],
      topics:['',[Validators.required]],
      imageurl:['',[Validators.nullValidator]],
    });

     this.returnUrl= this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  get fc(){
    return this.myform.controls;
  }
  // submit(){
  //   console.log("called");
  //   this.router.navigateByUrl(this.returnUrl);
  // }
  submit(){
    this.isSubmitted=true;
    if(this.myform.invalid)return;
    const fv=this.myform.value;
    const body:course={
      "id":'',
      "name":fv.name,
      "instructor":fv.instructor,
      "tags":fv.tags,
      "description":fv.description,
      "topics":fv.topics,
      "imageUrl":fv.imageurl
  };
  //console.log(body);
  this.AInfo.addCourse(body).subscribe((res)=>{
    console.log(res);
  });
  }
}


    // this.myform = this.formBuilder.group({
    //   name:['',[Validators.required]],
    //   faculty:['',,[Validators.required]],
    //   tags:['',[Validators.required]],
    //   about:['',,[Validators.required]],
    //   contents:['',,[Validators.required]],
    //    imageurl:['',[Validators.nullValidator]],
    // });