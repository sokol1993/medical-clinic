import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Login } from '../_models/login';
import { UserRole } from '../_models/userrole'

import { TranslateService } from "ng2-translate";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model = new Login();
  login = new Login();
  role: UserRole;
  user: User;
  loading = false;
  lang: string[];

  public translatedText: string;
  public supportedLangs: any[];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private translate: TranslateService) {}

  ngOnInit() {
    this.authenticationService.logout();
    this.supportedLangs = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' },
      { display: 'Polski', value: 'pl' },
    ];

    this.translate.setDefaultLang(localStorage.getItem("lang"));
    this.selectLang(localStorage.getItem("lang"));
  }

  log() {
    this.loading = true;
    this.authenticationService.login(this.model).subscribe(data => {
    this.login = JSON.parse(localStorage.getItem('currentUser'));
      this.authenticationService.getRole(this.login.id).subscribe(() => {
        if (JSON.parse(localStorage.getItem('role')).role === 'ROLE_USER') {
          this.router.navigate(['/myuser']);
        }
        else if (JSON.parse(localStorage.getItem('role')).role === 'ROLE_DOCTOR') {
          this.router.navigate(['/mydoctor']);
        }
        else if (JSON.parse(localStorage.getItem('role')).role === 'ROLE_ADMIN') {
          this.router.navigate(['/users']);
        }
      });

    }

      , error => {
        this.alertService.error(this.translate.instant("LoginPage.Fails"));
        this.loading = false;
      });
  }

  isCurrentLang(lang: string) {
    return lang === this.translate.currentLang;
  }

  selectLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

}