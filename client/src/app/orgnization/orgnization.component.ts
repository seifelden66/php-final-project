import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

import { JobsService } from '../services/jobs.service';
import { AddJobsService } from '../services/add-jobs.service';

@Component({
  selector: 'app-orgnization',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './orgnization.component.html',
  styleUrl: './orgnization.component.css',
})
export class OrgnizationComponent implements OnInit {
  constructor(private http: HttpClient) {}
  posts: any = [];
  private postService = inject(JobsService);
  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs() {
    this.postService.getPosts.subscribe((jobs: any) => {
      this.posts = jobs;
    });
  }

  disaple(id: any) {
    const url = `http://localhost/php-final-project/server/routes/jobs/disable-job.php?id=${id}`;
    return this.http.get(url).subscribe((res: any) => alert(res.message));
  }
  open(id: any) {
    const url = `http://localhost/php-final-project/server/routes/jobs/open-job.php?id=${id}`;
    return this.http.get(url).subscribe((res: any) => alert(res.message));
  }
}
