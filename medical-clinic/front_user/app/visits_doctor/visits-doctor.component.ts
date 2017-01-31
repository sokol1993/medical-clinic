import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor';
import { Login } from '../_models/login';
import { MedicalVisit } from '../_models/medicalvisit';
import { VisitService } from '../_services/visit.service';
import { MedicalVisitList } from '../_models/medicalvisitlist';

@Component({
    moduleId: module.id,
    selector: 'add-visit',
    templateUrl: 'visits-doctor.component.html',
})

export class VisitsDoctorComponent implements OnInit {
    visits: MedicalVisit[];
    listVisits: MedicalVisitList[];
    login: Login;

    constructor(private visitService: VisitService, private router: Router) {
        this.login = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {
        this.visitService.getDoctorVisits(this.login.doctor.id).subscribe(data => this.visits = data);
        this.visitService.getDoctorVisitsList(this.login.doctor.id).subscribe(data => this.listVisits = data);
    }

    confirm(visit: MedicalVisit) {
        this.visitService.confirmVisit(visit.id).subscribe(() => this.ngOnInit());
    }

    deleteVisitsList(visit: MedicalVisitList) {
        this.visitService.removeVisitList(visit.id).subscribe(() => this.ngOnInit());
    }
}