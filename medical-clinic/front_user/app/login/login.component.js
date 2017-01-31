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
var alert_service_1 = require("../_services/alert.service");
var authentication_service_1 = require("../_services/authentication.service");
var login_1 = require("../_models/login");
var ng2_translate_1 = require("ng2-translate");
var LoginComponent = (function () {
    function LoginComponent(router, authenticationService, alertService, translate) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.translate = translate;
        this.model = new login_1.Login();
        this.login = new login_1.Login();
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' },
            { display: 'Polski', value: 'pl' },
        ];
        this.translate.setDefaultLang(localStorage.getItem("lang"));
        this.selectLang(localStorage.getItem("lang"));
    };
    LoginComponent.prototype.log = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model).subscribe(function (data) {
            _this.login = JSON.parse(localStorage.getItem('currentUser'));
            _this.authenticationService.getRole(_this.login.id).subscribe(function () {
                if (JSON.parse(localStorage.getItem('role')).role === 'ROLE_USER') {
                    _this.router.navigate(['/myuser']);
                }
                else if (JSON.parse(localStorage.getItem('role')).role === 'ROLE_DOCTOR') {
                    _this.router.navigate(['/mydoctor']);
                }
                else if (JSON.parse(localStorage.getItem('role')).role === 'ROLE_ADMIN') {
                    _this.router.navigate(['/users']);
                }
            });
        }, function (error) {
            _this.alertService.error(_this.translate.instant("LoginPage.Fails"));
            _this.loading = false;
        });
    };
    LoginComponent.prototype.isCurrentLang = function (lang) {
        return lang === this.translate.currentLang;
    };
    LoginComponent.prototype.selectLang = function (lang) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService,
        alert_service_1.AlertService,
        ng2_translate_1.TranslateService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map