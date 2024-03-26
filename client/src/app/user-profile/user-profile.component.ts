import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  user:any={
    img:"https://th.bing.com/th/id/R.e764fc1c705687a6f4770ac6ead4a955?rik=Ik0ulhYQHntUPg&pid=ImgRaw&r=0",
    name: "omar",
    About : "Full Stack developer"
  }


}
