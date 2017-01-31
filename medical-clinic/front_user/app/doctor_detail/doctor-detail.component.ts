import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Doctor }                from '../_models/doctor';
import { DoctorService }         from '../_services/doctor.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'my-doctor-detail',
  templateUrl:'doctor-detail.component.html'
})
export class DoctorDetailComponent implements OnInit {
  doctor: Doctor;

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private location: Location,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authenticationService.logout();
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.doctorService.getDoctor(id)
        .subscribe(doctor => {this.doctor = doctor; localStorage.setItem('doctor', JSON.stringify(this.doctor));});
    });
     
  }
  
  goBack(): void {
    this.location.back();
  }
}