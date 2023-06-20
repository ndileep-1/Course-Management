import { Component } from '@angular/core';
import { tag } from 'src/app/shared/Models/TagModel';
import { CoursesdataService } from 'src/app/services/coursesdata.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags:tag[] = [];
  constructor(data:CoursesdataService,activatedRoute:ActivatedRoute,private route:Router){
    data.getTags().subscribe(serverTags=>{
      this.tags=serverTags;
    });
  }
  search(tag:string):void{
    
    if(tag)this.route.navigateByUrl('/tag/'+tag);
  }
}
