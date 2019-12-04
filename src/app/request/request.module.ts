import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestService } from './request.service';
import { RequestDetailComponent } from '../request/request-detail/request-detail.component';
import {RequestCreateComponent} from '../request/request-create/request-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, RouterModule, NgbModule
  ],
  declarations: [RequestListComponent, RequestDetailComponent, RequestCreateComponent],
  exports : [RequestListComponent, RequestDetailComponent, RequestCreateComponent],
  providers: [RequestService]
})
export class RequestModule { }