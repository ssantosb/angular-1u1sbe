import { Component, OnInit, Input, } from '@angular/core';
import { Iteration } from '../iteration';

@Component({
    selector: 'app-project-iterations',
    templateUrl: './project-iteration.component.html',
})
export class ProjectIterationComponent implements OnInit {
    @Input() projectIterations : Iteration [];
    
    public isCollapsed = true;
    
    /**
     * The function called when a iteration is posted to update the iterations
     */
    updateIterations(iterations:Iteration[]): void {
        this.projectIterations = iterations;
    }
    
    ngOnInit(){
    }
}