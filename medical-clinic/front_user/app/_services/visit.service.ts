import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';
import { Login } from '../_models/login';
import { Doctor } from '../_models/doctor';
import * as moment from 'moment';
import { MedicalVisit } from '../_models/medicalvisit'
import { MedicalVisitList } from '../_models/medicalvisitlist';

@Injectable()
export class VisitService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private addVisitUrl = 'http://localhost:8080/addVisit';
  private confirmVisitUrl = 'http://localhost:8080/confirmVisit/visit/';
  private getUserVisitsUrl = 'http://localhost:8080/getUserVisits/visit/';
  private getDoctorVisitsUrl = 'http://localhost:8080/getDoctorVisits/visit/';
  private getDoctorVisitsListUrl = 'http://localhost:8080/getDoctorVisits/visit/list/';
  private getAllVisitsUrl = 'http://localhost:8080/getVisits';
  private editVisitUrl = 'http://localhost:8080/editVisit';
  private documentVisitUrl = 'http://localhost:8080/downloadPDF';
  private removeVisitUrl = 'http://localhost:8080/remove/visit/'
  private removeVisitListUrl = 'http://localhost:8080/remove/visit/list/'
  private addVisitListUrl = 'http://localhost:8080/addVisitList'

  constructor(private http: Http) { }

  addVisit(model: MedicalVisit): Observable<MedicalVisit> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.addVisitUrl, model, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addVisitList(model: MedicalVisitList): Observable<MedicalVisitList> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.addVisitListUrl, model, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  confirmVisit(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.confirmVisitUrl + id;
    return this.http.get(link, options);
  }

  getUserVisits(id: number): Observable<MedicalVisit[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.getUserVisitsUrl + id;
    return this.http.get(link, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDoctorVisits(id: number): Observable<MedicalVisit[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.getDoctorVisitsUrl + id;
    return this.http.get(link, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDoctorVisitsList(id: number): Observable<MedicalVisitList[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.getDoctorVisitsListUrl + id;
    return this.http.get(link, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllVisits(): Observable<MedicalVisit[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.getAllVisitsUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  editVisit(model: MedicalVisit): Observable<MedicalVisit> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.editVisitUrl, model, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  removeVisit(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.removeVisitUrl + id;
    return this.http.delete(link, options);
  }

  removeVisitList(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.removeVisitListUrl + id;
    return this.http.delete(link, options);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}