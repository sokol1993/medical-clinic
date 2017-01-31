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
var VisitsMyComponent = (function () {
    function VisitsMyComponent(visitService, router) {
        this.visitService = visitService;
        this.router = router;
        this.login = JSON.parse(localStorage.getItem('currentUser'));
    }
    VisitsMyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visitService.getUserVisits(this.login.user.id).subscribe(function (data) { return _this.visits = data; });
    };
    VisitsMyComponent.prototype.getDocument = function (visit) {
        window.location.href = 'http://localhost:8080/downloadPDF/visit/' + visit.user.id + '/' + visit.doctor.id + '/' + visit.id;
    };
    return VisitsMyComponent;
}());
VisitsMyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-visit',
        templateUrl: 'visits-my.component.html',
    }),
    __metadata("design:paramtypes", [visit_service_1.VisitService, router_1.Router])
], VisitsMyComponent);
exports.VisitsMyComponent = VisitsMyComponent;
//# sourceMappingURL=visits-my.component.js.map