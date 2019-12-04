import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AdminModComponent } from './admin-mod/admin-mod.component';
import { ProviderModule } from '../provider/provider.module';
import { HardwareModule } from '../hardware/hardware.module';
import { UnitModule } from '../unit/unit.module';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, CommonModule, ReactiveFormsModule, FormsModule, NgbModule, NgxPermissionsModule, HttpClientModule,
    ProviderModule, HardwareModule, UnitModule ],
  declarations: [ AdminModComponent ],
  exports: [ AdminModComponent ],
})
export class AdminModule { }