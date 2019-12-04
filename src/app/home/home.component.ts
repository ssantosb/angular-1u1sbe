import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  unit: String;
  name: String;
  constructor() { }

  ngOnInit() {
    this.unit = localStorage.getItem('unit');
    this.name = localStorage.getItem('login');
  }

}
