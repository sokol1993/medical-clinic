import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Doctor }                from '../_models/doctor';
import { DoctorService }         from '../_services/doctor.service';
import { Subject }           from 'rxjs/Subject';
import { Observable }        from 'rxjs/Observable';
import { Login } from '../_models/login';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'doctors-user.component.html',
})
export class DoctorsUserComponent implements OnInit {
  doctors: Doctor[];
  login = new Login();

  constructor(
    private doctorService: DoctorService,
    private router: Router) { }

  getDoctors(): void {
    this.doctorService
        .getDoctors()
        .subscribe(doctors => this.doctors = doctors);
  }
  
  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem('currentUser'));
    this.getDoctors();
  }

  gotoDetail(doctor: Doctor): void {
    this.router.navigate(['userdetail', doctor.id]);
  }
}