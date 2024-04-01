import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

// const BASE_URL = 'http://localhost:85/php/server/routes/jobs/create-job.php';

@Injectable({
  providedIn: 'root'
})
export class AddJobsService {
  private url = 'http://localhost:85/php/server/routes/jobs/create-job.php';

  constructor(private httpClient:HttpClient) { }
  createPost(data:any){
    return this.httpClient.post(this.url, data)
  }
}
