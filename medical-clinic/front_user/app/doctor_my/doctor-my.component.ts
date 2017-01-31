import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor';
import { Login } from '../_models/login';
import { Specialization } from '../_models/specialization';
import { DoctorService } from '../_services/doctor.service';



@Component({
    moduleId: module.id,
    selector: 'add-doctor',
    templateUrl: 'doctor-my.component.html',
})

export class DoctorMyComponent implements OnInit {
    model = new Doctor();
    login = new Login();

    constructor(
        private doctorService: DoctorService,
        private router: Router) {
        this.login = JSON.parse(localStorage.getItem('currentUser'));
        this.model = this.login.doctor;
    }

    editDoctor() {
        this.doctorService.editDoctor(this.login).subscribe();
    }

    ngOnInit(): void {

    }

}