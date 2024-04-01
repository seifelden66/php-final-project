import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css',
})
export class AllJobsComponent {
  constructor(private http: HttpClient) {}

  jobs: any;
  ngOnInit() {
    const url =
      'http://localhost/php/php-final-project/server/routes/jobs/all-jobs.php';
    return this.http.get(url).subscribe((res) => this.jobs = res);
  }
}
