import { HttpClient } from '@angular/common/http';
import { UserService } from './../services/user.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {



  userregesterform :FormGroup;

  username!: string
  email!: any
  password!: any
  name	!: string
  country!: string
  experience	!: string
  education!: string
  certifications! : string
  bio! : string
  profile_picture! : any
  error : any = []
    
  UserService = inject(UserService)
  constructor (private http : HttpClient){
    this.userregesterform = new FormGroup ({
 

      username : new FormControl ("", [Validators.required , Validators.minLength(3)] ),
  
      
      email : new FormControl ("", [Validators.required , Validators.email] ),
  
      
      password : new FormControl ("", [Validators.required ]),
  
      // Example:2908kAls
      // const PASSWORD_PATTERN = '/^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/';
  
      
      name : new FormControl ("", [Validators.required , Validators.minLength(3)] ),
      
      
      experience : new FormControl ("", [Validators.required , Validators.minLength(3)] ),
  
      
      education : new FormControl ("", [Validators.required ] ),
  
      
      country : new FormControl ("", [Validators.required] ),

      certifications : new FormControl ("", [Validators.required] ),
   
      bio : new FormControl ("", [Validators.required ] ),
  
  
  
  
  
  
  
    })
  }

  handelSubmitform(){

    // console.log(this.userregesterform.value);
      const url =
        'http://localhost/php-final-project/server/routes/users/insert-user.php';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.userregesterform.value),
      })
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          // Assuming the response JSON contains a property named "token"
          if (res.token) {
            localStorage.setItem('token', res.token);
          } else {
            console.error('Token was not provided in the response');
          }
        })

      }

    }
