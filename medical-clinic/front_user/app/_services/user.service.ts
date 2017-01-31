import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';
import { Login } from '../_models/login';

@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private usersUrl = 'http://localhost:8080/getLogins';
  private addUserUrl = 'http://localhost:8080/addUser';
  private editUserUrl = 'http://localhost:8080/editUser';
  private checkUserUrl = 'http://localhost:8080/checkLogin';
  private removeLoginDoctorUrl = 'http://localhost:8080/remove/doctor/';
  private removeLoginUserUrl = 'http://localhost:8080/remove/user/';
  private activeUserUrl = 'http://localhost:8080/activation/user/';
  private deactiveUserUrl = 'http://localhost:8080/deactivation/user/';

  constructor(private http: Http) { }

  addUser(model: Login): Observable<Login> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.addUserUrl, model, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  editUser(model: Login): Observable<Login> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.editUserUrl, model, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUsers(): Observable<Login[]> {
    return this.http.get(this.usersUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  removeLoginDoctor(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.removeLoginDoctorUrl + id;
    return this.http.delete(link, options);
  }

  removeLoginUser(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.removeLoginUserUrl + id;
    return this.http.delete(link, options);
  }

  CheckUsernameNotExist(login: string) {
    let headers = new Headers({ 'Content-Type': 'text/html' })
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.checkUserUrl, login, options);
  }

  activeUser(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.activeUserUrl + id;
    return this.http.get(link, options)
  }

  deactiveUser(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let link = this.deactiveUserUrl + id;
    return this.http.get(link, options)
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

