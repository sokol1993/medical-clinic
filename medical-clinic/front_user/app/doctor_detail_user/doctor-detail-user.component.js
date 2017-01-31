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
var login_1 = require("../_models/login");
var DoctorDetailUserComponent = (function () {
    function DoctorDetailUserComponent(doctorService, route, location) {
        this.doctorService = doctorService;
        this.route = route;
        this.location = location;
        this.login = new login_1.Login();
    }
    DoctorDetailUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.login = JSON.parse(localStorage.getItem('currentUser'));
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.doctorService.getDoctor(id)
                .subscribe(function (doctor) { _this.doctor = doctor; localStorage.setItem('doctor', JSON.stringify(_this.doctor)); });
        });
    };
    DoctorDetailUserComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DoctorDetailUserComponent;
}());
DoctorDetailUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-doctor-detail',
        templateUrl: 'doctor-detail-user.component.html'
    }),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService,
        router_1.ActivatedRoute,
        common_1.Location])
], DoctorDetailUserComponent);
exports.DoctorDetailUserComponent = DoctorDetailUserComponent;
//# sourceMappingURL=doctor-detail-user.component.js.map