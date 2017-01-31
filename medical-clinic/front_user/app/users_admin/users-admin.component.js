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
var UsersAdminComponent = (function () {
    function UsersAdminComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.login = JSON.parse(localStorage.getItem('currentUser'));
    }
    UsersAdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService
            .getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    UsersAdminComponent.prototype.active = function (id) {
        var _this = this;
        this.userService.activeUser(id).subscribe(function () { _this.getUsers(); });
    };
    UsersAdminComponent.prototype.deactive = function (id) {
        var _this = this;
        this.userService.deactiveUser(id).subscribe(function () { _this.getUsers(); });
    };
    UsersAdminComponent.prototype.remove = function (login) {
        var _this = this;
        this.userService.removeLoginUser(login.id).subscribe(function () { return _this.ngOnInit(); });
    };
    UsersAdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    return UsersAdminComponent;
}());
UsersAdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-users',
        templateUrl: 'users-admin.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], UsersAdminComponent);
exports.UsersAdminComponent = UsersAdminComponent;
//# sourceMappingURL=users-admin.component.js.map