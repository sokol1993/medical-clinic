import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Login } from '../_models/login';
import { UserService } from '../_services/user.service';
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'my-users',
    templateUrl: 'user-my.component.html',
})

export class UserMyComponent {
    model = new User();
    login = new Login();

    constructor(private userService: UserService, private router: Router) {
        this.login = JSON.parse(localStorage.getItem('currentUser'));
        this.model = this.login.user;
    }

    editUser() {
        this.userService.editUser(this.login).subscribe();
    }
}