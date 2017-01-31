import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Doctor } from '../_models/doctor';
import { Specialization } from '../_models/specialization';
import { Observable } from 'rxjs/Observable';
import { Login } from '../_models/login';

@Injectable()
export class DoctorService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private getDoctorsUrl = 'http://localhost:8080/getDoctors';
  private getDoctorUrl = 'http://localhost:8080/getDoctor/';
  private addDoctorUrl = 'http://localhost:8080/addDoctor';
  private editDoctorUrl = 'http://localhost:8080/editDoctor';
  private getSpecializationUrl = 'http://localhost:8080/specializations';
  private checkUserUrl = 'http://localhost:8080/checkLogin';
  private activeDoctorUrl = 'http://localhost:8080/activation/doctor/';
  private deactiveDoctorUrl = 'http://localhost:8080/deactivation/doctor/';

  constructor(private http: Http) { }

  addDoctor(model: Login): Observable<Login> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.addDoctorUrl, model, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get(this.getDoctorsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSpecialization(): Observable<Specialization[]> {
    return this.http.get(this.getSpecializationUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDoctor(id: number): Observable<Doctor> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.getDoctorUrl + id;
    return this.http.get(link, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  editDoctor(model: Login): Observable<Login> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.editDoctorUrl, model, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  activeDoctor(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.activeDoctorUrl + id;
    return this.http.get(link, options)
  }

  deactiveDoctor(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.deactiveDoctorUrl + id;
    return this.http.get(link, options)
  }

  CheckUsernameNotExist(login: string) {
    let headers = new Headers({ 'Content-Type': 'text/html' })
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.checkUserUrl, login, options);

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

