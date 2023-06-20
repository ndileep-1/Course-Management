import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(activatedRoute:ActivatedRoute,private router:Router){
  }
  search(term:string):void{
    if(term)this.router.navigateByUrl('/search/'+term);
    else this.router.navigateByUrl('');
  }
}
