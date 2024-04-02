import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  constructor(private router : Router) {
    let token = localStorage.getItem('user-token');
    if (!token) {
      this.router.navigate([`login`]) 
    }
  }
  UserService = inject(UserService);

  user: any = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoS96_vETK55r95MRsFeB2f7T3S6W6UCsElsdeeOwljS2Ugdwyfo8w4FLzrmFF6VpdkUk&usqp=CAU',
    name: 'omar',
    About: 'Full Stack developer',
  };
  userdata: any = [];

  ngOnInit(): void {
    // let token = localStorage.getItem("user-token")
    // if (!token) {
    //     window.location.href= '/login'
    // }

    this.UserService.getuser().subscribe((res) => (this.userdata = res));
  }
}
