import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  getuser(){  

    return this.http.get("http://localhost/php-final-project/server/routes/users/user-profile.php?token=6609a8f79c9b41711909111") 

  }



}
