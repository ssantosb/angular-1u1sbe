import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  constructor(private developerService: DeveloperService) { 
    this.developers=[];
  }

  developers: Developer[];
  getDevelopers(): void {
    this.developerService.getDevelopers().subscribe(developers => (this.developers = developers));
  }

  ngOnInit() {
    this.getDevelopers();
  }

}