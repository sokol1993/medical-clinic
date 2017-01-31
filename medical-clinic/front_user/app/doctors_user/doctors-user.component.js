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
var doctor_service_1 = require("../_services/doctor.service");
var login_1 = require("../_models/login");
var DoctorsUserComponent = (function () {
    function DoctorsUserComponent(doctorService, router) {
        this.doctorService = doctorService;
        this.router = router;
        this.login = new login_1.Login();
    }
    DoctorsUserComponent.prototype.getDoctors = function () {
        var _this = this;
        this.doctorService
            .getDoctors()
            .subscribe(function (doctors) { return _this.doctors = doctors; });
    };
    DoctorsUserComponent.prototype.ngOnInit = function () {
        this.login = JSON.parse(localStorage.getItem('currentUser'));
        this.getDoctors();
    };
    DoctorsUserComponent.prototype.gotoDetail = function (doctor) {
        this.router.navigate(['userdetail', doctor.id]);
    };
    return DoctorsUserComponent;
}());
DoctorsUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'doctors-user.component.html',
    }),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService,
        router_1.Router])
], DoctorsUserComponent);
exports.DoctorsUserComponent = DoctorsUserComponent;
//# sourceMappingURL=doctors-user.component.js.map