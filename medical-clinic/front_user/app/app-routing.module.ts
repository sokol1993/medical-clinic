import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersAdminComponent } from './users_admin/users-admin.component'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { DoctorsComponent } from './doctors/doctors.component'
import { DoctorAddComponent } from './doctor_add/doctor-add.component'
import { DoctorDetailComponent } from './doctor_detail/doctor-detail.component'
import { VisitAddComponent } from './visit_add/visit-add.component'
import { AdminAuth } from './_guards/admin.auth';
import { UserAuth } from './_guards/user.auth';
import { DoctorAuth } from './_guards/doctor.auth';
import { UserMyComponent } from './user_my/user-my.component';
import { DoctorsAdminComponent } from './doctors_admin/doctors-admin.component';
import { VisitsMyComponent } from './visits_my/visits-my.component';
import { VisitsDoctorComponent } from './visits_doctor/visits-doctor.component';
import { VisitsAdminComponent } from './visits_admin/visits-admin.component';
import { DoctorMyComponent } from './doctor_my/doctor-my.component';
import { DoctorsUserComponent } from './doctors_user/doctors-user.component';
import { DoctorDetailUserComponent } from './doctor_detail_user/doctor-detail-user.component';
import { VisitsListCreateComponent } from './visits_list_create/visits-list-create.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'addDoctors', component: DoctorAddComponent },
  { path: 'detail/:id', component: DoctorDetailComponent },
  { path: 'doctorsuser', component: DoctorsUserComponent, canActivate: [UserAuth] },
  { path: 'userdetail/:id', component: DoctorDetailUserComponent, canActivate: [UserAuth] },
  { path: 'addVisit', component: VisitAddComponent, canActivate: [UserAuth] },
  { path: 'users', component: UsersAdminComponent, canActivate: [AdminAuth] },
  { path: 'myuser', component: UserMyComponent, canActivate: [UserAuth] },
  { path: 'doctorsadmin', component: DoctorsAdminComponent, canActivate: [AdminAuth] },
  { path: 'myvisits', component: VisitsMyComponent, canActivate: [UserAuth] },
  { path: 'adminvisits', component: VisitsAdminComponent, canActivate: [AdminAuth] },
  { path: 'doctorvisits', component: VisitsDoctorComponent, canActivate: [DoctorAuth] },
  { path: 'mydoctor', component: DoctorMyComponent, canActivate: [DoctorAuth] },
  { path: 'createvisitlist', component: VisitsListCreateComponent, canActivate: [DoctorAuth] },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
