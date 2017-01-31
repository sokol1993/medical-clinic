import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor';
import { Login } from '../_models/login';
import { Specialization } from '../_models/specialization';
import { DoctorService } from '../_services/doctor.service';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';

@Component({
  moduleId: module.id,
  selector: 'add-doctor',
  templateUrl: 'doctor-add.component.html',
})

export class DoctorAddComponent implements OnInit {
  model = new Doctor();
  login = new Login();
  specialization: Specialization[];
  modelSpec: Specialization;
  exists: boolean = false;

  constructor(
    private doctorService: DoctorService, private authenticationService: AuthenticationService,
    private router: Router, private alertService: AlertService, ) { }

  addDoctor() {
    if (!this.model) { return; }
    this.doctorService
      .CheckUsernameNotExist(this.login.login)
      .subscribe(data => { this.exists = data.json(); this.doctor() });
  }

  doctor() {
    this.login.doctor = this.model;
    if (!this.exists)
      this.doctorService
        .addDoctor(this.login)
        .subscribe(data =>
        { this.login; this.router.navigate(['/login']); }
        );
  }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.doctorService
      .getSpecialization()
      .subscribe(specialization => this.specialization = specialization)
  }

  onSelect(specialization: Specialization): void {
    this.modelSpec = specialization;
  }

  check() {
    this.doctorService
      .CheckUsernameNotExist(this.login.login)
      .subscribe(data =>
      { this.exists = data.json(); }
      );
  }

}