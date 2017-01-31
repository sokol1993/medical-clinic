import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor';
import { Login } from '../_models/login';
import { MedicalVisit } from '../_models/medicalvisit';
import { VisitService } from '../_services/visit.service';

@Component({
    moduleId: module.id,
    selector: 'add-visit',
    templateUrl: 'visits-admin.component.html',
})

export class VisitsAdminComponent implements OnInit {
    visits: MedicalVisit[];
    login: Login

    constructor(private visitService: VisitService, private router: Router) {
        this.login = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {
        this.visitService.getAllVisits().subscribe(data => this.visits = data);
    }

    remove(visit: MedicalVisit) {
        this.visitService.removeVisit(visit.id).subscribe(() => this.ngOnInit());
    }

}