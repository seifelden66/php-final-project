import { ActivatedRoute } from '@angular/router';
import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-applay-on-job',
  standalone: true,
  imports: [],
  templateUrl: './users-applay-on-job.component.html',
  styleUrl: './users-applay-on-job.component.css',
})
export class UsersApplayOnJobComponent {
  id: any;
  users: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const url = `http://localhost/php-final-project/server/routes/orgnization/applicant-data.php?id=${this.id}`;
    return this.http.get(url).subscribe((res) => (this.users = res));
  }

  rejectApplication(applicant_id: any, job_id: any) {
    const url =
      'http://localhost/php-final-project/server/routes/application/status-for-application.php';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        applicant_id: applicant_id,
        job_id: job_id,
        status: 'rejacted',
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        alert(res.message);
      });
  }

  inConsidration(applicant_id: any, job_id: any) {
    const url =
      'http://localhost/php-final-project/server/routes/application/status-for-application.php';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        applicant_id: applicant_id,
        job_id: job_id,
        status: 'in considration',
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        alert(res.message);
      });
  }
}
