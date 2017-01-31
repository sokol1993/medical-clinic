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
var DoctorMyComponent = (function () {
    function DoctorMyComponent(doctorService, router) {
        this.doctorService = doctorService;
        this.router = router;
        this.model = new doctor_1.Doctor();
        this.login = new login_1.Login();
        this.login = JSON.parse(localStorage.getItem('currentUser'));
        this.model = this.login.doctor;
    }
    DoctorMyComponent.prototype.editDoctor = function () {
        this.doctorService.editDoctor(this.login).subscribe();
    };
    DoctorMyComponent.prototype.ngOnInit = function () {
    };
    return DoctorMyComponent;
}());
DoctorMyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-doctor',
        templateUrl: 'doctor-my.component.html',
    }),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService,
        router_1.Router])
], DoctorMyComponent);
exports.DoctorMyComponent = DoctorMyComponent;
//# sourceMappingURL=doctor-my.component.js.map