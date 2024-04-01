import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL =
  'http://localhost/php/php-final-project/server/routes/orgnization/organization-jobs.php?orgToken=660a11bad24751711935930';
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private http = inject(HttpClient);
  constructor() {}
  getPosts = this.http.get(BASE_URL);
}
