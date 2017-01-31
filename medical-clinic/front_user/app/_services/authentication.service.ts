import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Login } from '../_models/login';
import 'rxjs/add/operator/toPromise';
import { UserRole } from '../_models/userrole'



@Injectable()
export class AuthenticationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private usersUrl = 'http://localhost:8080/getLogins';
    private logUrl = 'http://localhost:8080/login';
    private roleUrl = 'http://localhost:8080/role/';

    constructor(private http: Http) { }

    login(model: Login) {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.logUrl, model, options).map((response: Response) => {
            let user = response.json();
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    }

    getRole(id: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers });
        let link = this.roleUrl + id;
        return this.http.get(link, options).map((response: Response) => {
            let user = response.json();
            if (user) {
                localStorage.setItem('role', JSON.stringify(user));
            }
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('role');
    }

    private handleError(error: Response | any) {
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

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}