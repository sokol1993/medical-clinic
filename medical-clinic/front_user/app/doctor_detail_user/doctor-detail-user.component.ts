import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Doctor }                from '../_models/doctor';
import { DoctorService }         from '../_services/doctor.service';
import { Login } from '../_models/login';


@Component({
  moduleId: module.id,
  selector: 'my-doctor-detail',
  templateUrl:'doctor-detail-user.component.html'
})
export class DoctorDetailUserComponent implements OnInit {
  doctor: Doctor;
    login = new Login();

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem('currentUser'));
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