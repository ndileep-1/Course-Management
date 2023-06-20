import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { EnrolledCoursesPageComponent } from './components/enrolled-courses-page/enrolled-courses-page.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { ModifyCourseComponent } from './components/modify-course/modify-course.component';
import { CompletedCoursesPageComponent } from './components/completed-courses-page/completed-courses-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm' , component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'course/:id',component:CoursePageComponent},
  {path:'courses/enrolled/course/:id',component:CoursePageComponent},
  {path:'courses/completed/course/:id',component:CoursePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'courses/enrolled',component:EnrolledCoursesPageComponent},
  {path:'courses/completed',component:CompletedCoursesPageComponent},
  {path:'admin/addcourse',component:AddCourseComponent},
  {path:'admin/searchcourse',component:SearchCourseComponent},
  {path:'admin/searchcourse/modify/:id',component:ModifyCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
