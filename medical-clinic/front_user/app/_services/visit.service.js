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
var VisitService = (function () {
    function VisitService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.addVisitUrl = 'http://localhost:8080/addVisit';
        this.confirmVisitUrl = 'http://localhost:8080/confirmVisit/visit/';
        this.getUserVisitsUrl = 'http://localhost:8080/getUserVisits/visit/';
        this.getDoctorVisitsUrl = 'http://localhost:8080/getDoctorVisits/visit/';
        this.getDoctorVisitsListUrl = 'http://localhost:8080/getDoctorVisits/visit/list/';
        this.getAllVisitsUrl = 'http://localhost:8080/getVisits';
        this.editVisitUrl = 'http://localhost:8080/editVisit';
        this.documentVisitUrl = 'http://localhost:8080/downloadPDF';
        this.removeVisitUrl = 'http://localhost:8080/remove/visit/';
        this.removeVisitListUrl = 'http://localhost:8080/remove/visit/list/';
        this.addVisitListUrl = 'http://localhost:8080/addVisitList';
    }
    VisitService.prototype.addVisit = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addVisitUrl, model, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VisitService.prototype.addVisitList = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addVisitListUrl, model, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VisitService.prototype.confirmVisit = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.confirmVisitUrl + id;
        return this.http.get(link, options);
    };
    VisitService.prototype.getUserVisits = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.getUserVisitsUrl + id;
        return this.http.get(link, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VisitService.prototype.getDoctorVisits = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.getDoctorVisitsUrl + id;
        return this.http.get(link, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VisitService.prototype.getDoctorVisitsList = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.getDoctorVisitsListUrl + id;
        return this.http.get(link, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VisitService.prototype.getAllVisits = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getAllVisitsUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VisitService.prototype.editVisit = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.editVisitUrl, model, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VisitService.prototype.removeVisit = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.removeVisitUrl + id;
        return this.http.delete(link, options);
    };
    VisitService.prototype.removeVisitList = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.removeVisitListUrl + id;
        return this.http.delete(link, options);
    };
    VisitService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    VisitService.prototype.handleError = function (error) {
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
    return VisitService;
}());
VisitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], VisitService);
exports.VisitService = VisitService;
//# sourceMappingURL=visit.service.js.map