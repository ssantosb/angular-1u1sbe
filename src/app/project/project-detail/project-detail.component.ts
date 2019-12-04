import {Component, OnInit, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Params,  Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import {ProjectDetail} from '../projectDetail';
import {ProjectIterationComponent} from '../project-iterations/project-iteration.component';
import {ProjectAddIterationComponent} from '../project-add-iteration/project-add-iteration.component';
import { ProjectDeveloperComponent } from '../project-developers/project-developer.component';
import {ProjectAddDeveloperComponent} from '../project-add-developers/project-add-developers.component';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [DatePipe]
})
export class ProjectDetailComponent implements OnInit {

  /**
   * Constructor of this ProjectDetailComponent
   * @param projectService ProjectService class that handles HTTP methods post, put, delete, get
   * @param route route of the URL
   */
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private router: Router,
    private viewRef: ViewContainerRef,
    private dp: DatePipe
  ) { }

  /**
   * ProjectDetail attribute of this component
   */
  projectDetail: ProjectDetail;

  /**
   * id of the project as an input from html view
   */
  projectid: number;

  /**
   * Class loader
   */
  loader: any;

  /**
   * The child IterationListComponent
   */
  @ViewChild(ProjectIterationComponent) iterationListComponent: ProjectIterationComponent;

  /**
   * The child IterationAddComponent
   */
  @ViewChild(ProjectAddIterationComponent) iterationAddComponent: ProjectAddIterationComponent;

   /**
   * The child IterationListComponent
   */
  @ViewChild(ProjectDeveloperComponent) developerListComponent: ProjectDeveloperComponent;

  /**
   * The child IterationAddComponent
   */
  @ViewChild(ProjectAddDeveloperComponent) developerAddComponent: ProjectAddDeveloperComponent;

  
  toggleIterations(): void {
    if (this.iterationAddComponent.isCollapsed == false) {
        this.iterationAddComponent.isCollapsed = true;
    }
    this.iterationListComponent.isCollapsed = !this.iterationListComponent.isCollapsed;
  }

  toggleCreateIteration(): void {
    if (this.iterationListComponent.isCollapsed == false) {
        this.iterationListComponent.isCollapsed = true;
    }
    this.iterationAddComponent.isCollapsed = !this.iterationAddComponent.isCollapsed;
  }

  
  toggleDevelopers(): void {
    if (this.developerAddComponent.isCollapsed == false) {
        this.developerAddComponent.isCollapsed = true;
    }
    this.developerListComponent.isCollapsed = !this.developerListComponent.isCollapsed;
  }

  toggleCreateDevelopers(): void {
    if (this.developerListComponent.isCollapsed == false) {
        this.developerListComponent.isCollapsed = true;
    }
    this.developerAddComponent.isCollapsed = !this.developerAddComponent.isCollapsed;
  }
  /**
   * Method that gets the detail of a project from its id
   */
  getProjectDetail(): void {

    this.projectService.getProjectDetail(this.projectid).subscribe
    (value => {
        this.projectDetail = value
      }
    );
   
  }

  /**
   * The function called when a review is posted, so that the child component can refresh the list
   */
  updateIterations(): void {
    this.getProjectDetail();
    this.iterationListComponent.updateIterations(this.projectDetail.iterations);
    this.iterationListComponent.isCollapsed = false;
    this.iterationAddComponent.isCollapsed = true;
  }
  /**
   * Method to be executed once this component is loads
   * @param params default parameter of method
   */
  
  onLoad(params) {

    this.projectid = parseInt(params['id']);
    console.log(" en detail " + this.projectid);
    this.projectDetail = new ProjectDetail();
    this.getProjectDetail();
  }
  
  /**
   * Method to be executed automatically once this component is initialized.
   */
  ngOnInit() {

    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  /**
   * Method to be execuuted automatically once this component is destroyed.
   */
  
  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}