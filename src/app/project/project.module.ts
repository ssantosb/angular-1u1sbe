import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {ProjectAddIterationComponent} from './project-add-iteration/project-add-iteration.component';
import {ProjectIterationComponent} from './project-iterations/project-iteration.component';
import{ProjectAddDeveloperComponent} from "./project-add-developers/project-add-developers.component";
import{ProjectDeveloperComponent} from "./project-developers/project-developer.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DragDropModule} from "@angular/cdk/drag-drop";



@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule,NgbModule, DragDropModule],
  declarations: [ProjectListComponent, ProjectDetailComponent, ProjectCreateComponent,ProjectAddIterationComponent,ProjectIterationComponent, ProjectAddDeveloperComponent, ProjectDeveloperComponent],
  exports: [ProjectListComponent, ProjectCreateComponent],
  providers: [ProjectService],
})
export class ProjectModule { }