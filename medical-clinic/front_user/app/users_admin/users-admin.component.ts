import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Login } from '../_models/login';
import { UserService } from '../_services/user.service';
@Component({
  moduleId: module.id,
  selector: 'my-users',
  templateUrl: 'users-admin.component.html',
})
export class UsersAdminComponent implements OnInit {
  users: Login[];
  login: Login;
  constructor(
    private userService: UserService,
    private router: Router) { this.login = JSON.parse(localStorage.getItem('currentUser')); }

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe(
      users => this.users = users
      );
  }

  active(id): void {
    this.userService.activeUser(id).subscribe(() => { this.getUsers() });
  }

  deactive(id): void {
    this.userService.deactiveUser(id).subscribe(() => { this.getUsers() });
  }

  remove(login: Login) {
    this.userService.removeLoginUser(login.id).subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.getUsers();
  }
}