import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelAddComponent } from './components/channel-add/channel-add.component';

import { ChannelHomeComponent } from './components/channel-home/channel-home.component';
import { ChannelUpdateComponent } from './components/channel-update/channel-update.component';
import { ChannelVacancyComponent } from './components/channel-vacancy/channel-vacancy.component';
import { CompanyCreateExamsComponent } from './components/company-create-exams/company-create-exams.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { JobseekerCompanyComponent } from './components/jobseeker-company/jobseeker-company.component';
import { JobseekerDashboardComponent } from './components/jobseeker-dashboard/jobseeker-dashboard.component';
import { JobseekerLoginComponent } from './components/jobseeker-login/jobseeker-login.component';
import { JobseekerRegistrationComponent } from './components/jobseeker-registration/jobseeker-registration.component';
import { JobseekerVacancyApplyComponent } from './components/jobseeker-vacancy-apply/jobseeker-vacancy-apply.component';
import { JobseekerVacancyDashboardComponent } from './components/jobseeker-vacancy-dashboard/jobseeker-vacancy-dashboard.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { VacancyAddComponent } from './components/vacancy-add/vacancy-add.component';
import { VacancyUpdateComponent } from './components/vacancy-update/vacancy-update.component';

const routes: Routes = [
  {path:'',component: MainHomeComponent},
  {path:'companycreate',component: CompanyRegistrationComponent},
  {path:'companylogin',component: CompanyLoginComponent},
  {path:'companydashboard',component: CompanyDashboardComponent},
  {path:'channelhome',component: ChannelHomeComponent},
  {path:'channeladd',component: ChannelAddComponent},
  {path:'channelUpdate/:id',component: ChannelUpdateComponent},
  {path:'channelVacancy/:id',component: ChannelVacancyComponent},
  {path:'vacancyAdd/:id',component: VacancyAddComponent},
  {path:'vacancyUpdate/:id',component:VacancyUpdateComponent},
  {path:'jobseekerCreate',component:JobseekerRegistrationComponent},
  {path:'jobseekerLogin',component:JobseekerLoginComponent},
  {path:'jobseekerDashboard',component:JobseekerDashboardComponent},
  {path:'jobseekerCompany/:id',component:JobseekerCompanyComponent},
  {path:'jobseekerVacancyDashboard/:id',component:JobseekerVacancyDashboardComponent},
  {path:'jobseekerVacancyApply/:id',component:JobseekerVacancyApplyComponent},
  {path:'examCreate',component:CompanyCreateExamsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[MainHomeComponent,
                                CompanyRegistrationComponent,
                                CompanyLoginComponent,
                                ChannelHomeComponent,
                                ChannelAddComponent,
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
                                CompanyCreateExamsComponent]
