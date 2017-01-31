import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailComponent } from './doctor_detail/doctor-detail.component';
import { DoctorsUserComponent } from './doctors_user/doctors-user.component';
import { DoctorDetailUserComponent } from './doctor_detail_user/doctor-detail-user.component';
import { DoctorAddComponent } from './doctor_add/doctor-add.component';
import { AlertComponent } from './_directives/alert.component';
import { DoctorService } from './_services/doctor.service';
import { AdminAuth } from './_guards/admin.auth';
import { UserAuth } from './_guards/user.auth';
import { DoctorAuth } from './_guards/doctor.auth';
import { VisitsListCreateComponent } from './visits_list_create/visits-list-create.component'
import { AlertService } from './_services/alert.service';
import { VisitService } from './_services/visit.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { DatePickerModule } from 'ng2-datepicker';
import { VisitAddComponent } from './visit_add/visit-add.component';
import { UsersAdminComponent } from './users_admin/users-admin.component';
import { UserMyComponent } from './user_my/user-my.component';
import { DoctorsAdminComponent } from './doctors_admin/doctors-admin.component';
import { VisitsMyComponent } from './visits_my/visits-my.component';
import { VisitsDoctorComponent } from './visits_doctor/visits-doctor.component';
import { VisitsAdminComponent } from './visits_admin/visits-admin.component';
import { DoctorMyComponent } from './doctor_my/doctor-my.component';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './app/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ReCaptchaModule,
    DatePickerModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http]
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DoctorsComponent,
    DoctorDetailComponent,
    DoctorAddComponent,
    AlertComponent,
    VisitAddComponent,
    UsersAdminComponent,
    UserMyComponent,
    DoctorsAdminComponent,
    VisitsMyComponent,
    VisitsDoctorComponent,
    VisitsAdminComponent,
    DoctorMyComponent,
    DoctorsUserComponent,
    DoctorDetailUserComponent,
    VisitsListCreateComponent
  ],
  providers: [UserService, DoctorService, AdminAuth, UserAuth, DoctorAuth,
    AlertService,AuthenticationService, VisitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

