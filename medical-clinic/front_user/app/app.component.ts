import { Component, OnInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    localStorage.setItem('lang', "pl");
  }
}

