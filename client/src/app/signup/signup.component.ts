import { UserService } from './../services/user.service';
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
    

  constructor (private UserService : UserService){
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
  
      profile_picture : new FormControl ("", [Validators.required ] )
  
  
  
  
  
  
    })
  }

  saveuser(){
    var inputuser = {
      username : this.username,      
      email : this.email,      
      password : this.password,      
      name : this.name,      
      country : this.country,      
      experience : this.experience,      
      education : this.education,      
      certifications : this.certifications,      
      bio : this.bio,      
      profile_picture : this.profile_picture,      

    }



    this.UserService.insert(inputuser).subscribe({
      next : (res:any)=>{
        console.log(res);
        
      },
      error:(err:any)=>{
        console.log(err,"error");

      }

    })
  }


  handelSubmitform(){
    console.log(this.userregesterform);
    
  }
}
