import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { CompanyNavbarComponent } from './components/company-navbar/company-navbar.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanySidenavComponent } from './components/company-sidenav/company-sidenav.component';
import { ChannelHomeComponent } from './components/channel-home/channel-home.component';
import { ChannelAddComponent } from './components/channel-add/channel-add.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { ChannelUpdateComponent } from './components/channel-update/channel-update.component';
import { ChannelVacancyComponent } from './components/channel-vacancy/channel-vacancy.component';
import { VacancyAddComponent } from './components/vacancy-add/vacancy-add.component';
import { VacancyUpdateComponent } from './components/vacancy-update/vacancy-update.component';
import { JobseekerRegistrationComponent } from './components/jobseeker-registration/jobseeker-registration.component';
import { JobseekerLoginComponent } from './components/jobseeker-login/jobseeker-login.component';
import { JobseekerDashboardComponent } from './components/jobseeker-dashboard/jobseeker-dashboard.component';
import { JobseekerCompanyComponent } from './components/jobseeker-company/jobseeker-company.component';
import { JobseekerVacancyDashboardComponent } from './components/jobseeker-vacancy-dashboard/jobseeker-vacancy-dashboard.component';
import { JobseekerVacancyApplyComponent } from './components/jobseeker-vacancy-apply/jobseeker-vacancy-apply.component';
import { CompanyCreateExamsComponent } from './components/company-create-exams/company-create-exams.component';
import { JobSeekerExamPageComponent } from './components/job-seeker-exam-page/job-seeker-exam-page.component';
import { CompanySelectedJobseekersComponent } from './components/company-selected-jobseekers/company-selected-jobseekers.component';
import { ToastrModule } from 'ngx-toastr';
import { CompanyProfileSettingsComponent } from './components/company-profile-settings/company-profile-settings.component';
import { JobseekerProfileSettingsComponent } from './components/jobseeker-profile-settings/jobseeker-profile-settings.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CompanyForgetPasswordComponent } from './components/company-forget-password/company-forget-password.component'

@NgModule({
  declarations: [
    AppComponent,
    CompanyRegistrationComponent,
    CompanyNavbarComponent,
    CompanyLoginComponent,
    CompanyDashboardComponent,
    CompanySidenavComponent,
    ChannelHomeComponent,
    ChannelAddComponent,
    MainHomeComponent,
    ChannelUpdateComponent,
    ChannelVacancyComponent,
    VacancyAddComponent,
    VacancyUpdateComponent,
    JobseekerRegistrationComponent,
    JobseekerLoginComponent,
    JobseekerDashboardComponent,
    JobseekerCompanyComponent,
    JobseekerVacancyDashboardComponent,
    JobseekerVacancyApplyComponent,
    CompanyCreateExamsComponent,
    JobSeekerExamPageComponent,
    CompanySelectedJobseekersComponent,
    CompanyProfileSettingsComponent,
    JobseekerProfileSettingsComponent,
    ForgetPasswordComponent,
    CompanyForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    // RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  // providers: [{
      // provide: HTTP_INTERCEPTORS,
      // useClass: TokenInterceptorService,
      // multi: true

  // }],
  bootstrap: [AppComponent],
  entryComponents: [CompanyLoginComponent]
})
export class AppModule { }
