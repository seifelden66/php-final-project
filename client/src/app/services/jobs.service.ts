import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const orgToken = localStorage.getItem('org-token');
const BASE_URL = `http://localhost/php-final-project/server/routes/orgnization/organization-jobs.php?orgToken=${orgToken}`;
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private http = inject(HttpClient);
  constructor() {}
  getPosts = this.http.get(BASE_URL);
}
