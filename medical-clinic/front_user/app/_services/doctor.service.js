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
var DoctorService = (function () {
    function DoctorService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.getDoctorsUrl = 'http://localhost:8080/getDoctors';
        this.getDoctorUrl = 'http://localhost:8080/getDoctor/';
        this.addDoctorUrl = 'http://localhost:8080/addDoctor';
        this.editDoctorUrl = 'http://localhost:8080/editDoctor';
        this.getSpecializationUrl = 'http://localhost:8080/specializations';
        this.checkUserUrl = 'http://localhost:8080/checkLogin';
        this.activeDoctorUrl = 'http://localhost:8080/activation/doctor/';
        this.deactiveDoctorUrl = 'http://localhost:8080/deactivation/doctor/';
    }
    DoctorService.prototype.addDoctor = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addDoctorUrl, model, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DoctorService.prototype.getDoctors = function () {
        return this.http.get(this.getDoctorsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DoctorService.prototype.getSpecialization = function () {
        return this.http.get(this.getSpecializationUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DoctorService.prototype.getDoctor = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.getDoctorUrl + id;
        return this.http.get(link, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DoctorService.prototype.editDoctor = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.editDoctorUrl, model, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DoctorService.prototype.activeDoctor = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.activeDoctorUrl + id;
        return this.http.get(link, options);
    };
    DoctorService.prototype.deactiveDoctor = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.deactiveDoctorUrl + id;
        return this.http.get(link, options);
    };
    DoctorService.prototype.CheckUsernameNotExist = function (login) {
        var headers = new http_1.Headers({ 'Content-Type': 'text/html' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.checkUserUrl, login, options);
    };
    DoctorService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DoctorService.prototype.handleError = function (error) {
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
    return DoctorService;
}());
DoctorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map