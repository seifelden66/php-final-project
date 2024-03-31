import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  userregesterform :FormGroup;

  constructor (){
    this.userregesterform = new FormGroup({

    })
  }

  handelSubmitform(){
    console.log(this.userregesterform);
    
  }
}
