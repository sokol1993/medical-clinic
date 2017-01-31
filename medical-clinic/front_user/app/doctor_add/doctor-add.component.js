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
var doctor_1 = require("../_models/doctor");
var login_1 = require("../_models/login");
var doctor_service_1 = require("../_services/doctor.service");
var authentication_service_1 = require("../_services/authentication.service");
var alert_service_1 = require("../_services/alert.service");
var DoctorAddComponent = (function () {
    function DoctorAddComponent(doctorService, authenticationService, router, alertService) {
        this.doctorService = doctorService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.alertService = alertService;
        this.model = new doctor_1.Doctor();
        this.login = new login_1.Login();
        this.exists = false;
    }
    DoctorAddComponent.prototype.addDoctor = function () {
        var _this = this;
        if (!this.model) {
            return;
        }
        this.doctorService
            .CheckUsernameNotExist(this.login.login)
            .subscribe(function (data) { _this.exists = data.json(); _this.doctor(); });
    };
    DoctorAddComponent.prototype.doctor = function () {
        var _this = this;
        this.login.doctor = this.model;
        if (!this.exists)
            this.doctorService
                .addDoctor(this.login)
                .subscribe(function (data) { _this.login; _this.router.navigate(['/login']); });
    };
    DoctorAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.logout();
        this.doctorService
            .getSpecialization()
            .subscribe(function (specialization) { return _this.specialization = specialization; });
    };
    DoctorAddComponent.prototype.onSelect = function (specialization) {
        this.modelSpec = specialization;
    };
    DoctorAddComponent.prototype.check = function () {
        var _this = this;
        this.doctorService
            .CheckUsernameNotExist(this.login.login)
            .subscribe(function (data) { _this.exists = data.json(); });
    };
    return DoctorAddComponent;
}());
DoctorAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-doctor',
        templateUrl: 'doctor-add.component.html',
    }),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService, authentication_service_1.AuthenticationService,
        router_1.Router, alert_service_1.AlertService])
], DoctorAddComponent);
exports.DoctorAddComponent = DoctorAddComponent;
//# sourceMappingURL=doctor-add.component.js.map