import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Login } from '../_models/login';
import { UserService } from '../_services/user.service';
import { DatePickerModule } from 'ng2-datepicker';
import * as moment from 'moment';
import { ReCaptchaComponent } from 'angular2-recaptcha/lib/captcha.component';
import { AuthenticationService } from '../_services/authentication.service';


import { TranslateService } from "ng2-translate";


@Component({
  moduleId: module.id,
  selector: 'my-users',
  templateUrl: 'register.component.html',
})

export class RegisterComponent implements OnInit {
  currentUser: User;
  model = new User();
  login = new Login();
  exists: boolean = false;
  maxDate: string;
  token: String;


  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  public translatedText: string;
  public supportedLangs: any[];

  constructor(
    private userService: UserService, private router: Router, private translate: TranslateService,
    private authenticationService: AuthenticationService, ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    moment().format('MMMM Do YYYY, h:mm:ss a');
    this.maxDate = moment().subtract(18, 'years').calendar()
    this.maxDate = this.maxDate.substring(6, 10) + "-" + this.maxDate.substring(0, 2) + "-" + this.maxDate.substring(3, 5);

    this.supportedLangs = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' },
      { display: 'Polski', value: 'pl' },
    ];
    this.translate.setDefaultLang(localStorage.getItem("lang"));
    this.selectLang(localStorage.getItem("lang"));
  }

  isCurrentLang(lang: string) {
    return lang === this.translate.currentLang;
  }

  selectLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
  addUser() {
    if (!this.model) { return; }
    if (this.token) {
      this.userService
        .CheckUsernameNotExist(this.login.login)
        .subscribe(data => { this.exists = data.json(); this.user() });
    }
  }

  handleCorrectCaptcha(event) {
    this.token = event;
  }

  user() {
    this.login.user = this.model;
    if (!this.exists)
      this.userService
        .addUser(this.login)
        .subscribe(data =>
        { this.login; this.router.navigate(['/login']); }
        );
  }

  check() {
    this.userService
      .CheckUsernameNotExist(this.login.login)
      .subscribe(data =>
      { this.exists = data.json(); }
      );
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

}