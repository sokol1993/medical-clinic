"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var users_admin_component_1 = require("./users_admin/users-admin.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var doctors_component_1 = require("./doctors/doctors.component");
var doctor_add_component_1 = require("./doctor_add/doctor-add.component");
var doctor_detail_component_1 = require("./doctor_detail/doctor-detail.component");
var visit_add_component_1 = require("./visit_add/visit-add.component");
var admin_auth_1 = require("./_guards/admin.auth");
var user_auth_1 = require("./_guards/user.auth");
var doctor_auth_1 = require("./_guards/doctor.auth");
var user_my_component_1 = require("./user_my/user-my.component");
var doctors_admin_component_1 = require("./doctors_admin/doctors-admin.component");
var visits_my_component_1 = require("./visits_my/visits-my.component");
var visits_doctor_component_1 = require("./visits_doctor/visits-doctor.component");
var visits_admin_component_1 = require("./visits_admin/visits-admin.component");
var doctor_my_component_1 = require("./doctor_my/doctor-my.component");
var doctors_user_component_1 = require("./doctors_user/doctors-user.component");
var doctor_detail_user_component_1 = require("./doctor_detail_user/doctor-detail-user.component");
var visits_list_create_component_1 = require("./visits_list_create/visits-list-create.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'doctors', component: doctors_component_1.DoctorsComponent },
    { path: 'addDoctors', component: doctor_add_component_1.DoctorAddComponent },
    { path: 'detail/:id', component: doctor_detail_component_1.DoctorDetailComponent },
    { path: 'doctorsuser', component: doctors_user_component_1.DoctorsUserComponent, canActivate: [user_auth_1.UserAuth] },
    { path: 'userdetail/:id', component: doctor_detail_user_component_1.DoctorDetailUserComponent, canActivate: [user_auth_1.UserAuth] },
    { path: 'addVisit', component: visit_add_component_1.VisitAddComponent, canActivate: [user_auth_1.UserAuth] },
    { path: 'users', component: users_admin_component_1.UsersAdminComponent, canActivate: [admin_auth_1.AdminAuth] },
    { path: 'myuser', component: user_my_component_1.UserMyComponent, canActivate: [user_auth_1.UserAuth] },
    { path: 'doctorsadmin', component: doctors_admin_component_1.DoctorsAdminComponent, canActivate: [admin_auth_1.AdminAuth] },
    { path: 'myvisits', component: visits_my_component_1.VisitsMyComponent, canActivate: [user_auth_1.UserAuth] },
    { path: 'adminvisits', component: visits_admin_component_1.VisitsAdminComponent, canActivate: [admin_auth_1.AdminAuth] },
    { path: 'doctorvisits', component: visits_doctor_component_1.VisitsDoctorComponent, canActivate: [doctor_auth_1.DoctorAuth] },
    { path: 'mydoctor', component: doctor_my_component_1.DoctorMyComponent, canActivate: [doctor_auth_1.DoctorAuth] },
    { path: 'createvisitlist', component: visits_list_create_component_1.VisitsListCreateComponent, canActivate: [doctor_auth_1.DoctorAuth] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map