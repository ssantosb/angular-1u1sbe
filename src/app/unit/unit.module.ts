import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitService } from './unit.service';
import { UnitCreateComponent } from './unit-create/unit-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { UnitDetailComponent } from './unit-detail/unit-detail.component';

@NgModule({
  imports: [
    RouterModule, CommonModule, ReactiveFormsModule
  ],
  declarations: [UnitListComponent, UnitCreateComponent, UnitDetailComponent],
    exports: [UnitListComponent, UnitCreateComponent],
    providers: [UnitService]
})
export class UnitModule { }
