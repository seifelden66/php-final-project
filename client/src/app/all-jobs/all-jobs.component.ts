import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css'
})

export class AllJobsComponent {

  constructor (private router : Router){}

  redirection(){
    this.router.navigate([`singlejobs`]);
  }

}
