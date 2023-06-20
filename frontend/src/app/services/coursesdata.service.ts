import { Injectable } from '@angular/core';
// import { courses, tags } from 'src/data';
import { course } from '../shared/Models/CourseModel';
import { tag } from '../shared/Models/TagModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { COURSES_BY_ID_URL, COURSES_BY_SEARCH_URL, COURSES_BY_TAG_URL, COURSES_TAGS_URL, COURSES_URL, ENROLLED_COURSES_URL, GET_COURSE_URL } from '../shared/constants/urls';
@Injectable({
  providedIn: 'root'
})
export class CoursesdataService {
  constructor(private http:HttpClient) { 

  }
  public getData():Observable<course[]>{
    return this.http.get<course[]>(COURSES_URL);
  }

  public getDataBySearch(SearchItem:String){
    return this.http.get<course[]>(COURSES_BY_SEARCH_URL+SearchItem);
  }
  
  public getTags():Observable<tag[]>{
    return this.http.get<tag[]>(COURSES_TAGS_URL);
  }

  public getCourseByTag(tag:string):Observable<course[]>{
    return tag == "All"?
    this.getData():
    this.http.get<course[]>(COURSES_BY_TAG_URL+tag);
  }

  public getCourseById(courseId:number):Observable<course>{
    return this.http.get<course>(COURSES_BY_ID_URL+courseId);
  }

  public getCourseForAdmin(id:any):Observable<any>{
    return this.http.get("http://localhost:5000/api/courses/getcourse/"+id);
  }
}
