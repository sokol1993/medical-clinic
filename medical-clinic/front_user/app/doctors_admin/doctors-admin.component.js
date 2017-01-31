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
var user_service_1 = require("../_services/user.service");
var doctor_service_1 = require("../_services/doctor.service");
var DoctorsAdminComponent = (function () {
    function DoctorsAdminComponent(userService, router, doctorService) {
        this.userService = userService;
        this.router = router;
        this.doctorService = doctorService;
        this.login = JSON.parse(localStorage.getItem('currentUser'));
    }
    DoctorsAdminComponent.prototype.active = function (id) {
        var _this = this;
        this.doctorService.activeDoctor(id).subscribe(function () { _this.getUsers(); });
    };
    DoctorsAdminComponent.prototype.deactive = function (id) {
        var _this = this;
        this.doctorService.deactiveDoctor(id).subscribe(function () { _this.getUsers(); });
    };
    DoctorsAdminComponent.prototype.remove = function (login) {
        var _this = this;
        this.userService.removeLoginDoctor(login.id).subscribe(function () { return _this.ngOnInit(); });
    };
    DoctorsAdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService
            .getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    DoctorsAdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    return DoctorsAdminComponent;
}());
DoctorsAdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-users',
        templateUrl: 'doctors-admin.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        doctor_service_1.DoctorService])
], DoctorsAdminComponent);
exports.DoctorsAdminComponent = DoctorsAdminComponent;
//# sourceMappingURL=doctors-admin.component.js.map