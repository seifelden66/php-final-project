import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-jobs',
  standalone: true,
  imports: [],
  templateUrl: './single-jobs.component.html',
  styleUrl: './single-jobs.component.css'
})
export class SingleJobsComponent {
  constructor(private route: ActivatedRoute, private http : HttpClient){}
  job : any;
id : any;
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    const url = `http://localhost/php-final-project/server/routes/jobs/single-job.php?id=${this.id}`;
    this.job = this.http.get(url).subscribe(res => this.job = res
    )
  }
  applay(id : any){
    const token = localStorage.getItem('user-token');
    if(!token){
      window.location.href = '/login';
    }
    const a = "http://localhost/php-final-project/server/routes/users/user-applay.php"
    this.http.post(a, { job_id: id, cv_url: 'this is static cv', tokenNumber: token })
  .subscribe(
    (res: any) => {
      alert(res.message);
    },
    (error: any) => {
      // Handle error here, if needed
      alert(error.error.message);
    }
  );
  }
}
