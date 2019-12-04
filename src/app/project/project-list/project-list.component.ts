import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

/**
 * The list of projects which belong to the app
 */ projects: Project[];

 /**
  * Constructor of the project list component
  * @param projectService 
  * @param router Router to manage component navigation
  * @param route Route to navigate
  */
  constructor(private projectService: ProjectService, private router:Router ,private route:ActivatedRoute) { }


  /**
   * Retrieves the projects form the DB
   */
  getProjects() : void { 
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  /** 
   *   onSelectCreate(): void {
    console.log("navigating ", this.route.toString());
    this.router.navigate(['/projects', { outlets: { create: ['agregar'] } }], {
      relativeTo: this.route.parent
    });
  }
  */

  /**
   * Default method to be executed once the component is initialized
   */
  ngOnInit() {
    this.getProjects();
  }
}