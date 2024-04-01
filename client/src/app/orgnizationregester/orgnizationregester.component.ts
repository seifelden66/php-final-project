import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-orgnizationregester',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orgnizationregester.component.html',
  styleUrl: './orgnizationregester.component.css'
})
export class OrgnizationregesterComponent {


  orgnizationregisterform : FormGroup;

  constructor(){
   this.orgnizationregisterform = new FormGroup ({
 
 
     username : new FormControl ("", [Validators.required , Validators.minLength(3)] ),
 
     
     email : new FormControl ("", [Validators.required , Validators.email] ),
 
     
     password : new FormControl ("", [Validators.required ]),
 
     // Example:2908kAls
     // const PASSWORD_PATTERN = '/^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/';
 
     
     orgName : new FormControl ("", [Validators.required , Validators.minLength(3)] ),
 
     
     contactPerson : new FormControl ("", [Validators.required ] ),
 
     
     country : new FormControl ("", [Validators.required] ),
  
     bio : new FormControl ("", [Validators.required ] ),
 
 
 
 
 
 
 
   })
  }
 
  handelSubmitform(){

    const url =
    'http://localhost/php-final-project/server/routes/orgnization/orgnization-regester.php';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.orgnizationregisterform.value),
  })
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      // Assuming the response JSON contains a property named "token"
      if (res.token) {
        localStorage.setItem('org-token', res.token);
      } else {
        console.error('Token was not provided in the response');
      }
    })

  }
  }



