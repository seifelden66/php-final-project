import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';

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


];
