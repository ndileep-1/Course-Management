import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/Models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  user!:User;
  isAdmin=false;
  constructor(private userService:UserService,private router:Router){
  };
  
  ngOnInit(){
    this.userService.userObservale.subscribe((newUser)=>{
      this.user = newUser;
      this.isAdmin=this.user.isAdmin;
    });
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("");
  }


}
