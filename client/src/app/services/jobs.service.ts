import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL = 'http://localhost:85/php/server/routes/jobs/all-jobs.php';
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private http = inject(HttpClient)
  constructor() {}
  getPosts = this.http.get(BASE_URL)
}
