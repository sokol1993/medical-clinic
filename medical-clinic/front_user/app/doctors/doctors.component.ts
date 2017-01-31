import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor';
import { DoctorService } from '../_services/doctor.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'doctors.component.html',
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[];
  
  constructor(
    private doctorService: DoctorService,
    private router: Router, private authenticationService: AuthenticationService) { }

  getDoctors(): void {
    this.doctorService
      .getDoctors()
      .subscribe(doctors => this.doctors = doctors);
  }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.getDoctors();
  }

  gotoDetail(doctor: Doctor): void {
    this.router.navigate(['detail', doctor.id]);
  }
}

