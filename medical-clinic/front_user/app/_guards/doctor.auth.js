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
var DoctorAuth = (function () {
    function DoctorAuth(router) {
        this.router = router;
    }
    DoctorAuth.prototype.canActivate = function () {
        if (JSON.parse(localStorage.getItem('role')).role === "ROLE_DOCTOR") {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return DoctorAuth;
}());
DoctorAuth = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], DoctorAuth);
exports.DoctorAuth = DoctorAuth;
//# sourceMappingURL=doctor.auth.js.map