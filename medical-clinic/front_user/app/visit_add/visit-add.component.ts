import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor';
import { Login } from '../_models/login';
import { MedicalVisit } from '../_models/medicalvisit';
import { MedicalVisitList } from '../_models/medicalvisitlist';
import { VisitService } from '../_services/visit.service';

@Component({
  moduleId: module.id,
  selector: 'add-visit',
  templateUrl: 'visit-add.component.html',
})

export class VisitAddComponent implements OnInit {
  model = new MedicalVisit();
  checkedVisit: MedicalVisitList;
  listVisits: MedicalVisitList[];
  login: Login;
  doctor: Doctor;

  constructor(private visitService: VisitService, private router: Router) {
    this.login = JSON.parse(localStorage.getItem('currentUser'));
    this.doctor = JSON.parse(localStorage.getItem('doctor'));
  }

  addVisit() {
    this.model.doctor = this.doctor;
    this.model.user = this.login.user;
    this.model.idList = this.checkedVisit.id;
    this.visitService
      .addVisit(this.model)
      .subscribe(data =>
      { this.router.navigate(["/doctorsuser"]) });
  }

  ngOnInit(): void {
    this.visitService.getDoctorVisitsList(this.doctor.id).subscribe(data => this.listVisits = data);
  }
}