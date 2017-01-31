import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor';
import { Login } from '../_models/login';
import { MedicalVisitList } from '../_models/medicalvisitlist';
import { VisitService } from '../_services/visit.service';

@Component({
    moduleId: module.id,
    selector: 'add-visit',
    templateUrl: 'visits-list-create.component.html',
})

export class VisitsListCreateComponent {
    visitsList = new MedicalVisitList();
    login: Login;
    time: DateConstructor;

    constructor(private visitService: VisitService, private router: Router) {
        this.login = JSON.parse(localStorage.getItem('currentUser'));
    }

    addVisitList() {
        this.visitsList.doctor = this.login.doctor;
        this.visitsList.date = new Date(this.time);
        this.visitsList.date.setHours(this.visitsList.date.getHours() - 1);
        this.visitService
            .addVisitList(this.visitsList)
            .subscribe(data =>
            { this.router.navigate(["/doctorvisits"]) }
            );
    }
}