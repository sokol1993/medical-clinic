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
var authentication_service_1 = require("../_services/authentication.service");
var DoctorsComponent = (function () {
    function DoctorsComponent(doctorService, router, authenticationService) {
        this.doctorService = doctorService;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    DoctorsComponent.prototype.getDoctors = function () {
        var _this = this;
        this.doctorService
            .getDoctors()
            .subscribe(function (doctors) { return _this.doctors = doctors; });
    };
    DoctorsComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.getDoctors();
    };
    DoctorsComponent.prototype.gotoDetail = function (doctor) {
        this.router.navigate(['detail', doctor.id]);
    };
    return DoctorsComponent;
}());
DoctorsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'doctors.component.html',
    }),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService,
        router_1.Router, authentication_service_1.AuthenticationService])
], DoctorsComponent);
exports.DoctorsComponent = DoctorsComponent;
//# sourceMappingURL=doctors.component.js.map