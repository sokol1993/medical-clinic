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
var user_1 = require("../_models/user");
var login_1 = require("../_models/login");
var user_service_1 = require("../_services/user.service");
var UserMyComponent = (function () {
    function UserMyComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = new user_1.User();
        this.login = new login_1.Login();
        this.login = JSON.parse(localStorage.getItem('currentUser'));
        this.model = this.login.user;
    }
    UserMyComponent.prototype.editUser = function () {
        this.userService.editUser(this.login).subscribe();
    };
    return UserMyComponent;
}());
UserMyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-users',
        templateUrl: 'user-my.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], UserMyComponent);
exports.UserMyComponent = UserMyComponent;
//# sourceMappingURL=user-my.component.js.map