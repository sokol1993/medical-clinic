import { Component, OnInit} from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-users',
  templateUrl: 'home.component.html',
})
export class HomeComponent {

  constructor(

    private router: Router) { }
  
}