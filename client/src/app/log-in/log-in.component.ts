import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  loginform : FormGroup

  email!: any
  password!: any
  loginas  : any
  constructor (private http : HttpClient , private router : Router){
    this.loginform = new FormGroup({

      email : new FormControl("",Validators.required),
      password : new FormControl ("",Validators.required),
      loginas : new FormControl ("",Validators.required)

    })
    
  }
  
  
  handelloginform(){

    
    console.log(this.loginform.value)

    const url =
    'http://localhost/php-final-project/server/routes/users/user-login.php';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.loginform.value),
  })
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      // Assuming the response JSON contains a property named "token"
      if (res.token) {

        if(this.loginform.value.loginas == "user" ){
          localStorage.setItem('user-token', res.token);
  
          this.router.navigate([`alljobs`]);
          
        }else if(this.loginform.value.loginas == "organization" ){

          localStorage.setItem('org-token', res.token);
          
          // this.router.navigate([`index`]);
          
        }
        

        
      } 
      else {
        // console.log(res.error);
        alert(res.error)
      }
    })




  }

}




  
  


