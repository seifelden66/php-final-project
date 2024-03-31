import { OrgnizationComponent } from './orgnization/orgnization.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { SingleJobsComponent } from './single-jobs/single-jobs.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
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
    component:OrgnizationComponent,
    title:"orgnization-page"
},


];
