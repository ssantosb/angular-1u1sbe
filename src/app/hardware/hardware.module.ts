import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HardwareListComponent } from './hardware-list/hardware-list.component';
import { HardwareService } from './hardware.service';
import { HardwareDetailComponent } from './hardware-detail/hardware-detail.component';
import { HardwareCreateComponent } from './hardware-create/hardware-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [ AppRoutingModule, CommonModule, ReactiveFormsModule, FormsModule, NgbModule],
  declarations: [HardwareListComponent, HardwareDetailComponent, HardwareCreateComponent],
  exports: [HardwareListComponent, HardwareCreateComponent],
  providers: [HardwareService]
})
export class HardwareModule { }