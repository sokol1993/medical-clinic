import { Component, OnInit, } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor';
import { Login } from '../_models/login';
import { MedicalVisit } from '../_models/medicalvisit';
import { VisitService } from '../_services/visit.service';

@Component({
    moduleId: module.id,
    selector: 'add-visit',
    templateUrl: 'visits-my.component.html',
})

export class VisitsMyComponent implements OnInit {
    visits: MedicalVisit[];
    login: Login;

    constructor(private visitService: VisitService, private router: Router) {
        this.login = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {
        this.visitService.getUserVisits(this.login.user.id).subscribe(data => this.visits = data);
    }

    getDocument(visit: MedicalVisit): void {
        window.location.href = 'http://localhost:8080/downloadPDF/visit/' + visit.user.id + '/' + visit.doctor.id + '/' + visit.id;
    }

}