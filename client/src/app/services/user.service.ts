import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url = "http://localhost/php-final-project/server/routes/users/insert-user.php"
  insert(inputuser :any){
    return this.http.post(this.url,inputuser);
  }



}
