import { UserService } from './../services/user.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  UserService = inject(UserService)

  user:any={
    img:"",
    name: "omar",
    About : "Full Stack developer"
  }
  userdata : any = []

  ngOnInit(): void {
    this.UserService.getuser().subscribe((res)=> this.userdata = res)
    
    
    
  }
  





}
