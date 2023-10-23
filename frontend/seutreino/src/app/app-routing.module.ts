import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './component/form-client/form-client.component';
import { FormProfessionalComponent } from './component/form-professional/form-professional.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { InitialComponent } from './component/initial/initial.component';
import { LoggedClientComponent } from './component/logged-client/logged-client.component';
import { LoggedProfessionalComponent } from './component/logged-professional/logged-professional.component';
import { AboutComponent } from './component/about/about.component';
import { PersonalDataComponent } from './component/personal-data/personal-data.component';
import { FormAdmComponent } from './component/form-adm/form-adm.component';
import { LoginAdmComponent } from './component/login-adm/login-adm.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { ScheduleTimeComponent } from './component/schedule-time/schedule-time.component';
import { ProfileProfessionalComponent } from './component/profile-professional/profile-professional.component';
import { ServicesProfessionalComponent } from './component/services-professional/services-professional.component';
import { AboutProfessionalComponent } from './component/about-professional/about-professional.component';
import { CommentsComponent } from './component/comments/comments.component';
import { ProfessionalScheduleComponent } from './component/professional-schedule/professional-schedule.component';
import { ResearchProfessionalComponent } from './component/research-professional/research-professional.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';

import { SchedulesCardComponent } from './component/schedules-card/schedules-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { CustomerProfileComponent } from './component/customer-profile/customer-profile.component';

const routes: Routes = [
  { path: 'contactus', component: ContactusComponent },
  { path: 'form-client', component: FormClientComponent },
  { path: 'form-professional', component: FormProfessionalComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form-adm', component: FormAdmComponent },
  { path: 'login-adm', component: LoginAdmComponent },
  { path: 'initial', component: InitialComponent },
  { path: 'logged-client', component: LoggedClientComponent },
  { path: 'logged-professional', component: LoggedProfessionalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search-result', component: SearchResultComponent},
  { path: 'comments', component: CommentsComponent },
  { path: 'agenda', component: ProfessionalScheduleComponent},
  { path: 'logged-professional', component: LoggedProfessionalComponent},
  { path:'about',component:AboutComponent},
  { path: 'personal-data', component: PersonalDataComponent},
  { path: 'schedule-time', component: ScheduleTimeComponent},
  { path: 'research-professional', component:ResearchProfessionalComponent},
  { path: 'service-details', component:ServiceDetailsComponent},
  { path: 'search-result', component:SearchResultComponent},
  {path: 'search',component: ResearchProfessionalComponent},
  { path: 'schedules-card', component:SchedulesCardComponent},
  {path: 'search',component: ResearchProfessionalComponent},
  {path: 'customer-profile',component: CustomerProfileComponent},

    {
      path: 'profile-professional/:idProfissional',
      component: ProfileProfessionalComponent,
      children: [
        { path: '', redirectTo: 'comments', pathMatch: 'full' }, 
        { path: 'comments', component: CommentsComponent },
        { path: 'about-professional', component: AboutProfessionalComponent },
        { path: 'service-professional', component: ServicesProfessionalComponent },
      ],
    },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
