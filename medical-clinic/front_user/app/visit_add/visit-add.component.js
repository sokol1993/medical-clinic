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
var medicalvisit_1 = require("../_models/medicalvisit");
var visit_service_1 = require("../_services/visit.service");
var VisitAddComponent = (function () {
    function VisitAddComponent(visitService, router) {
        this.visitService = visitService;
        this.router = router;
        this.model = new medicalvisit_1.MedicalVisit();
        this.login = JSON.parse(localStorage.getItem('currentUser'));
        this.doctor = JSON.parse(localStorage.getItem('doctor'));
    }
    VisitAddComponent.prototype.addVisit = function () {
        var _this = this;
        this.model.doctor = this.doctor;
        this.model.user = this.login.user;
        this.model.idList = this.checkedVisit.id;
        this.visitService
            .addVisit(this.model)
            .subscribe(function (data) { _this.router.navigate(["/doctorsuser"]); });
    };
    VisitAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visitService.getDoctorVisitsList(this.doctor.id).subscribe(function (data) { return _this.listVisits = data; });
    };
    return VisitAddComponent;
}());
VisitAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-visit',
        templateUrl: 'visit-add.component.html',
    }),
    __metadata("design:paramtypes", [visit_service_1.VisitService, router_1.Router])
], VisitAddComponent);
exports.VisitAddComponent = VisitAddComponent;
//# sourceMappingURL=visit-add.component.js.map