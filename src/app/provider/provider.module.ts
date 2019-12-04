import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderService } from './provider.service';
import { ProviderCreateComponent } from './provider-create/provider-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { ProviderDetailComponent } from './provider-detail/provider-detail.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  declarations: [ProviderListComponent, ProviderCreateComponent, ProviderDetailComponent],
    exports: [ProviderListComponent, ProviderCreateComponent],
    providers: [ProviderService]
})
export class ProviderModule { }
