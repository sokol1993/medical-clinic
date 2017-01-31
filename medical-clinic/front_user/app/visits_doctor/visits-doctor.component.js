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
var visit_service_1 = require("../_services/visit.service");
var VisitsDoctorComponent = (function () {
    function VisitsDoctorComponent(visitService, router) {
        this.visitService = visitService;
        this.router = router;
        this.login = JSON.parse(localStorage.getItem('currentUser'));
    }
    VisitsDoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visitService.getDoctorVisits(this.login.doctor.id).subscribe(function (data) { return _this.visits = data; });
        this.visitService.getDoctorVisitsList(this.login.doctor.id).subscribe(function (data) { return _this.listVisits = data; });
    };
    VisitsDoctorComponent.prototype.confirm = function (visit) {
        var _this = this;
        this.visitService.confirmVisit(visit.id).subscribe(function () { return _this.ngOnInit(); });
    };
    VisitsDoctorComponent.prototype.deleteVisitsList = function (visit) {
        var _this = this;
        this.visitService.removeVisitList(visit.id).subscribe(function () { return _this.ngOnInit(); });
    };
    return VisitsDoctorComponent;
}());
VisitsDoctorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-visit',
        templateUrl: 'visits-doctor.component.html',
    }),
    __metadata("design:paramtypes", [visit_service_1.VisitService, router_1.Router])
], VisitsDoctorComponent);
exports.VisitsDoctorComponent = VisitsDoctorComponent;
//# sourceMappingURL=visits-doctor.component.js.map