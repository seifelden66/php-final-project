import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css',
})
export class AllJobsComponent {
  constructor(private http: HttpClient, private router: Router) {}

  jobs: any;
  ngOnInit() {
    const url =
      'http://localhost/php-final-project/server/routes/jobs/all-jobs.php';
    return this.http.get(url).subscribe((res) => (this.jobs = res));
  }
  // constructor (private router : Router){}

  redirection() {
    this.router.navigate([`singlejobs`]);
  }
}
