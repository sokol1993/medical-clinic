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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var Observable_1 = require("rxjs/Observable");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.usersUrl = 'http://localhost:8080/getLogins';
        this.addUserUrl = 'http://localhost:8080/addUser';
        this.editUserUrl = 'http://localhost:8080/editUser';
        this.checkUserUrl = 'http://localhost:8080/checkLogin';
        this.removeLoginDoctorUrl = 'http://localhost:8080/remove/doctor/';
        this.removeLoginUserUrl = 'http://localhost:8080/remove/user/';
        this.activeUserUrl = 'http://localhost:8080/activation/user/';
        this.deactiveUserUrl = 'http://localhost:8080/deactivation/user/';
    }
    UserService.prototype.addUser = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addUserUrl, model, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.editUser = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.editUserUrl, model, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.removeLoginDoctor = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.removeLoginDoctorUrl + id;
        return this.http.delete(link, options);
    };
    UserService.prototype.removeLoginUser = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.removeLoginUserUrl + id;
        return this.http.delete(link, options);
    };
    UserService.prototype.CheckUsernameNotExist = function (login) {
        var headers = new http_1.Headers({ 'Content-Type': 'text/html' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.checkUserUrl, login, options);
    };
    UserService.prototype.activeUser = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.activeUserUrl + id;
        return this.http.get(link, options);
    };
    UserService.prototype.deactiveUser = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.deactiveUserUrl + id;
        return this.http.get(link, options);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map