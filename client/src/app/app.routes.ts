import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { SingleJobsComponent } from './single-jobs/single-jobs.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { UsersApplayOnJobComponent } from './users-applay-on-job/users-applay-on-job.component';
import { OrgnizationregesterComponent } from './orgnizationregester/orgnizationregester.component';
import { IndexComponent } from './index/index.component';
import { OrgnizationComponent } from './orgnization/orgnization.component';


 
  
 


export const routes: Routes = [

{
    path: "",
    component:IndexComponent,
    title:"index-page"
    
},
{
    path: "profile",
    component:UserProfileComponent,
    title:"user-profile"
},
{
    path: "alljobs",
    component:AllJobsComponent,
    title:"all-jobs-page"
},
{
    path: "singlejobs",
    component:SingleJobsComponent,
    title:"singlejobs-page"
},
{
    path: "login",
    component:LogInComponent,
    title:"log-in-page"
},
{
    path: "signup",
    component:SignupComponent,
    title:"sign-up-page"
},
{
    path: "orgnization",
    component:OrgnizationregesterComponent,
    title:"orgnization-page"
},


  {
    path: 'login',
    component: LogInComponent,
    title: 'log-in-page',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'sign-up-page',
  },
  {
    path: 'organization',
    component: OrgnizationComponent,
    title: 'orgnization-page',
  },
  {
    path: 'add-job',
    component: AddJobsComponent,
    title: 'addJob-page',
  },
  {
    path: 'users-applay-on-job/:id',
    component: UsersApplayOnJobComponent,
    title: 'users applayd',
  },
];
