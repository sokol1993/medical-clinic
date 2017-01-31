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
var moment = require("moment");
var captcha_component_1 = require("angular2-recaptcha/lib/captcha.component");
var authentication_service_1 = require("../_services/authentication.service");
var ng2_translate_1 = require("ng2-translate");
var RegisterComponent = (function () {
    function RegisterComponent(userService, router, translate, authenticationService) {
        this.userService = userService;
        this.router = router;
        this.translate = translate;
        this.authenticationService = authenticationService;
        this.model = new user_1.User();
        this.login = new login_1.Login();
        this.exists = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        moment().format('MMMM Do YYYY, h:mm:ss a');
        this.maxDate = moment().subtract(18, 'years').calendar();
        this.maxDate = this.maxDate.substring(6, 10) + "-" + this.maxDate.substring(0, 2) + "-" + this.maxDate.substring(3, 5);
        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' },
            { display: 'Polski', value: 'pl' },
        ];
        this.translate.setDefaultLang(localStorage.getItem("lang"));
        this.selectLang(localStorage.getItem("lang"));
    }
    RegisterComponent.prototype.isCurrentLang = function (lang) {
        return lang === this.translate.currentLang;
    };
    RegisterComponent.prototype.selectLang = function (lang) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    };
    RegisterComponent.prototype.addUser = function () {
        var _this = this;
        if (!this.model) {
            return;
        }
        if (this.token) {
            this.userService
                .CheckUsernameNotExist(this.login.login)
                .subscribe(function (data) { _this.exists = data.json(); _this.user(); });
        }
    };
    RegisterComponent.prototype.handleCorrectCaptcha = function (event) {
        this.token = event;
    };
    RegisterComponent.prototype.user = function () {
        var _this = this;
        this.login.user = this.model;
        if (!this.exists)
            this.userService
                .addUser(this.login)
                .subscribe(function (data) { _this.login; _this.router.navigate(['/login']); });
    };
    RegisterComponent.prototype.check = function () {
        var _this = this;
        this.userService
            .CheckUsernameNotExist(this.login.login)
            .subscribe(function (data) { _this.exists = data.json(); });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    return RegisterComponent;
}());
__decorate([
    core_1.ViewChild(captcha_component_1.ReCaptchaComponent),
    __metadata("design:type", captcha_component_1.ReCaptchaComponent)
], RegisterComponent.prototype, "captcha", void 0);
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-users',
        templateUrl: 'register.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, ng2_translate_1.TranslateService,
        authentication_service_1.AuthenticationService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map