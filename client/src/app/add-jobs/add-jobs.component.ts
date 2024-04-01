import { Component, OnInit } from '@angular/core';
import { AddJobsService } from '../services/add-jobs.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-jobs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-jobs.component.html',
  styleUrl: './add-jobs.component.css',
})
export class AddJobsComponent implements OnInit {
  data: FormGroup;

  constructor(private http: HttpClient,  private router: Router) {
    this.data = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      job_type: new FormControl(''),
      location: new FormControl(''),
      expiry_date: new FormControl(''),
      token: new FormControl('6609feb6808221711931062'),
    });
  }

  handleForm() {
    const url = 'http://localhost:85/php/server/routes/jobs/create-job.php';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.data.value),
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        this.router.navigate(['/organization']);
      });

  }
  ngOnInit() {
    // this.userProfile.getUserProfile().subscribe((res) => (this.Ta = res));
  }
  
}
