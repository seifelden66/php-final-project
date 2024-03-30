import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 userregesterform : FormGroup;
 constructor(){
  this.userregesterform = new FormGroup ({


    username : new FormControl ("", [Validators.required , Validators.minLength(3)] ),

    
    email : new FormControl ("", [Validators.required , Validators.email] ),

    
    password : new FormControl ("", [Validators.required ]),

    // Example:2908kAls
    // const PASSWORD_PATTERN = '/^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/';

    
    name : new FormControl ("", [Validators.required , Validators.minLength(3)] ),

    
    country : new FormControl ("", [Validators.required ] ),

    
    experience : new FormControl ("", [Validators.required] ),

    
    education : new FormControl ("", [Validators.required ] ),

    
    certifications : new FormControl ("", [Validators.required ] ),

    bio : new FormControl ("", [Validators.required ] ),

    profile_picture : new FormControl ("", [Validators.required ] )






  })
 }

 handelSubmitform(){
  console.log(this.userregesterform);
  
 }



}
