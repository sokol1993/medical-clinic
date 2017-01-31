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
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var home_component_1 = require("./home/home.component");
var doctors_component_1 = require("./doctors/doctors.component");
var doctor_detail_component_1 = require("./doctor_detail/doctor-detail.component");
var doctors_user_component_1 = require("./doctors_user/doctors-user.component");
var doctor_detail_user_component_1 = require("./doctor_detail_user/doctor-detail-user.component");
var doctor_add_component_1 = require("./doctor_add/doctor-add.component");
var alert_component_1 = require("./_directives/alert.component");
var doctor_service_1 = require("./_services/doctor.service");
var admin_auth_1 = require("./_guards/admin.auth");
var user_auth_1 = require("./_guards/user.auth");
var doctor_auth_1 = require("./_guards/doctor.auth");
var visits_list_create_component_1 = require("./visits_list_create/visits-list-create.component");
var alert_service_1 = require("./_services/alert.service");
var visit_service_1 = require("./_services/visit.service");
var authentication_service_1 = require("./_services/authentication.service");
var user_service_1 = require("./_services/user.service");
var angular2_recaptcha_1 = require("angular2-recaptcha");
var ng2_datepicker_1 = require("ng2-datepicker");
var visit_add_component_1 = require("./visit_add/visit-add.component");
var users_admin_component_1 = require("./users_admin/users-admin.component");
var user_my_component_1 = require("./user_my/user-my.component");
var doctors_admin_component_1 = require("./doctors_admin/doctors-admin.component");
var visits_my_component_1 = require("./visits_my/visits-my.component");
var visits_doctor_component_1 = require("./visits_doctor/visits-doctor.component");
var visits_admin_component_1 = require("./visits_admin/visits-admin.component");
var doctor_my_component_1 = require("./doctor_my/doctor-my.component");
var ng2_translate_1 = require("ng2-translate");
var http_2 = require("@angular/http");
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, './app/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule,
            angular2_recaptcha_1.ReCaptchaModule,
            ng2_datepicker_1.DatePickerModule,
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [http_2.Http]
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            home_component_1.HomeComponent,
            doctors_component_1.DoctorsComponent,
            doctor_detail_component_1.DoctorDetailComponent,
            doctor_add_component_1.DoctorAddComponent,
            alert_component_1.AlertComponent,
            visit_add_component_1.VisitAddComponent,
            users_admin_component_1.UsersAdminComponent,
            user_my_component_1.UserMyComponent,
            doctors_admin_component_1.DoctorsAdminComponent,
            visits_my_component_1.VisitsMyComponent,
            visits_doctor_component_1.VisitsDoctorComponent,
            visits_admin_component_1.VisitsAdminComponent,
            doctor_my_component_1.DoctorMyComponent,
            doctors_user_component_1.DoctorsUserComponent,
            doctor_detail_user_component_1.DoctorDetailUserComponent,
            visits_list_create_component_1.VisitsListCreateComponent
        ],
        providers: [user_service_1.UserService, doctor_service_1.DoctorService, admin_auth_1.AdminAuth, user_auth_1.UserAuth, doctor_auth_1.DoctorAuth,
            alert_service_1.AlertService, authentication_service_1.AuthenticationService, visit_service_1.VisitService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map