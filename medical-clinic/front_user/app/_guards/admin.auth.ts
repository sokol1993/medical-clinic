import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminAuth implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (JSON.parse(localStorage.getItem('role')).role === "ROLE_ADMIN") {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}