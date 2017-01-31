import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Login } from '../_models/login';
import { UserService } from '../_services/user.service';
import { DoctorService } from '../_services/doctor.service';

@Component({
  moduleId: module.id,
  selector: 'my-users',
  templateUrl: 'doctors-admin.component.html',
})
export class DoctorsAdminComponent implements OnInit {
  users: Login[];
  login: Login;
  
  constructor(
    private userService: UserService,
    private router: Router,
    private doctorService: DoctorService) { this.login = JSON.parse(localStorage.getItem('currentUser')); }

  active(id): void {
    this.doctorService.activeDoctor(id).subscribe(() => { this.getUsers() });
  }

  deactive(id): void {
    this.doctorService.deactiveDoctor(id).subscribe(() => { this.getUsers() });
  }

  remove(login: Login) {
    this.userService.removeLoginDoctor(login.id).subscribe(() => this.ngOnInit());
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe(
      users => this.users = users
      );
  }

  ngOnInit(): void {
    this.getUsers();
  }
}