import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor (private router:Router){}

  redirection(){
    this.router.navigate([`login`])
  }
  
  redirection2(){
    this.router.navigate([`signup`])
  }
  
  redirection3(){
    this.router.navigate([`orgnizationregester`])
  }
  


}
