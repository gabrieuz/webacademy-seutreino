import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormClientComponent } from './component/form-client/form-client.component';
import { FormProfessionalComponent } from './component/form-professional/form-professional.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbaroffComponent } from './component/navbaroff/navbaroff.component';
import { LoginComponent } from './component/login/login.component';
import { InitialComponent } from './component/initial/initial.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggedClientComponent } from './component/logged-client/logged-client.component';
import { LoggedProfessionalComponent } from './component/logged-professional/logged-professional.component';
import { AboutComponent } from './component/about/about.component';
import { PersonalDataComponent } from './component/personal-data/personal-data.component';
import { LoginAdmComponent } from './component/login-adm/login-adm.component';
import { FormAdmComponent } from './component/form-adm/form-adm.component';
import { NavbaronComponent } from './component/navbaron/navbaron.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { ScheduleTimeComponent } from './component/schedule-time/schedule-time.component';
import { ProfileProfessionalComponent } from './component/profile-professional/profile-professional.component';
import { CommentsComponent } from './component/comments/comments.component';
import { AboutProfessionalComponent } from './component/about-professional/about-professional.component';
import { ServicesProfessionalComponent } from './component/services-professional/services-professional.component';
import { ProfessionalScheduleComponent } from './component/professional-schedule/professional-schedule.component';
import { ResearchProfessionalComponent } from './component/research-professional/research-professional.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { SchedulesCardComponent } from './component/schedules-card/schedules-card.component';
import { CustomerProfileComponent } from './component/customer-profile/customer-profile.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

// Imports:
import { MultiSelectModule } from 'primeng/multiselect';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TabMenuModule } from 'primeng/tabmenu';
// Imports:
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent,
    FormClientComponent,
    FormProfessionalComponent,
    HomeComponent,
    FooterComponent,
    NavbaroffComponent,
    LoginComponent,
    LoginAdmComponent,
    FormAdmComponent,
    InitialComponent,
    LoggedClientComponent,
    LoggedProfessionalComponent,
    AboutComponent,
    PersonalDataComponent,
    NavbaronComponent,
    ContactusComponent,
    ScheduleTimeComponent,
    ProfileProfessionalComponent,
    CommentsComponent,
    AboutProfessionalComponent,
    ServicesProfessionalComponent,
    ProfessionalScheduleComponent,
    ResearchProfessionalComponent,
    ServiceDetailsComponent,
    SearchResultComponent,
    SchedulesCardComponent,
    DashboardComponent,
    CustomerProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MultiSelectModule,
    HttpClientModule,
    RatingModule,
    TabMenuModule,
    InputTextModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),
    ToastModule,
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
