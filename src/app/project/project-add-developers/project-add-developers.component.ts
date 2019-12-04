import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { DeveloperDetail } from '../../developer/developer-detail';
import { Developer } from '../../developer/developer';
import { ProjectService } from '../project.service';
import { ProjectDetail } from '../projectDetail';
import { DeveloperService} from '../../developer/developer.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";


import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-project-add-developer',
    templateUrl: './project-add-developers.component.html',
    styleUrls: ['./project-add-developers.component.css'],
    providers: [DatePipe]
})
export class ProjectAddDeveloperComponent implements OnInit {

    /**
    * The constructor of the component
    * @param projectService The book service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private projectService: ProjectService,
        private developerService:DeveloperService,
        private toastrService: ToastrService,
    ) { }

    /**
    * The book's id
    */
    @Input() projectDetail: ProjectDetail;

    /**
    * The initial array of developers to retrieve
    */
    initialDevelopers: Developer[];
    
    /**
     * The initial array of developerDetail
     */
    initialDevelopersDetail:DeveloperDetail[];
    
    /**
     * The developer to be updated
     */
    developerDetail:DeveloperDetail;

     /**
    * The initial array of developers to assign to the project
    */
    finalDevelopers: DeveloperDetail[]= [];

    /**
    * The initial array of developers that are not leaders
    */
    filteredDevelopers: Developer[] = [];

    /**
     * says if the component is collapsed
     */
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a review has just been posted
    * so that the list of reviews refreshes
    */
    @Output() updateDevelopers = new EventEmitter();

    /**
    * This function posts a project
    * @param developerForm The form of the project
    */
   /**
    postDeveloper(developerForm: NgForm): DeveloperDetail {

        this.developerDetail.projects.push(this.projectDetail);
        this.projectDetail.developers.push(this.developerDetail);
        this.projectService.updateProject(this.projectDetail)
            .subscribe(() => {
                developerForm.resetForm();
                this.updateDevelopers.emit();
                this.toastrService.success("The developer was successfully added", 'developer added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        this.developerService.updateDeveloper(this.developerDetail)
             .subscribe(() => {
               developerForm.resetForm();
               this.updateDevelopers.emit();
               this.toastrService.success("The project was successfully added", 'projecyt added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
            
        return this.developerDetail;

    }
    */
   /**
    * Method to add developers to the project and adds th project to each developer
    */
    onSelectAddDevelopers():void{
        this.projectDetail.developers = this.finalDevelopers;
        this.projectService.updateProject(this.projectDetail).subscribe(()=>{
            this.updateDevelopers.emit();
            this.toastrService.success("The project was successfully updated", "Project Updated");
        }, err => {
            this.toastrService.error(err, "Error");
        });
        for(let dev of this.finalDevelopers){
            this.developerService.getDeveloperDetail(dev.id).subscribe(newDev => {
                newDev.projects.push(this.projectDetail);
                this.developerService.updateDeveloper(newDev).subscribe(()=>{
                    this.toastrService.success("The developer was successfully updated","Developer updated");
                },err =>{
                    this.toastrService.error(err, "Error");
                })
            });

        }
    }

    /**
     * Method that listens to drag drop event and takes action
     * @param event drag-drop event to be heard in the html component, meaning that a developer from one list has been dragged and dropped to another list
     */
    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
             moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
             transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  
  
    }
  

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.getDevelopers();
    }

    /**
     * Gets all developers in the app
     */
    getDevelopers():void{
        this.developerService.getDevelopers().subscribe(
            p => {this.initialDevelopers = p
                this.filterDevelopers(p)
               
            });
    }

    /**
     * Filters developers according to the 
     */
    filterDevelopers(developers: Developer[]):void{
        for(let d of this.initialDevelopers){
            if(d.leader==false){
                this.filteredDevelopers.push(d);
            }
        }
    }


    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
   /**
    ngOnChanges() {
        this.ngOnInit();
    }
    */
}