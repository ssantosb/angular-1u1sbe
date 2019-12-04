import { Component, OnInit, Input, } from '@angular/core';
import { Developer } from '../../developer/developer';

@Component({
    selector: 'app-project-developers',
    templateUrl: './project-developer.component.html',
})
export class ProjectDeveloperComponent implements OnInit {
    @Input() projectDevelopers : Developer [];
    
    public isCollapsed = true;
    
    /**
     * The function called when a iteration is posted to update the iterations
     */
    updateDevelopers(developers:Developer[]): void {
        this.projectDevelopers = developers;
    }
    
    ngOnInit(){
    }
}