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
var common_1 = require("@angular/common");
var doctor_service_1 = require("../_services/doctor.service");
var authentication_service_1 = require("../_services/authentication.service");
var DoctorDetailComponent = (function () {
    function DoctorDetailComponent(doctorService, route, location, authenticationService) {
        this.doctorService = doctorService;
        this.route = route;
        this.location = location;
        this.authenticationService = authenticationService;
    }
    DoctorDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.logout();
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.doctorService.getDoctor(id)
                .subscribe(function (doctor) { _this.doctor = doctor; localStorage.setItem('doctor', JSON.stringify(_this.doctor)); });
        });
    };
    DoctorDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DoctorDetailComponent;
}());
DoctorDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-doctor-detail',
        templateUrl: 'doctor-detail.component.html'
    }),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService,
        router_1.ActivatedRoute,
        common_1.Location,
        authentication_service_1.AuthenticationService])
], DoctorDetailComponent);
exports.DoctorDetailComponent = DoctorDetailComponent;
//# sourceMappingURL=doctor-detail.component.js.map