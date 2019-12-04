import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { HardwareModule } from './hardware/hardware.module';
import { ProviderModule } from './provider/provider.module';
import { UnitModule } from './unit/unit.module';
import { ProjectModule } from './project/project.module';
import { DeveloperModule } from './developer/developer.module';
import { RequesterModule } from './requester/requester.module';
import{RequestModule} from "./request/request.module";
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './home/home.component';
import { BarraComponent } from './barra/barra.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';


import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
    declarations: [
        AppComponent,PieComponent,HomeComponent,BarraComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ProviderModule,
        UnitModule,
        ProjectModule,
        RequestModule,
        DeveloperModule,
        RequesterModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        ReactiveFormsModule,
        FormsModule,
        HardwareModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        DragDropModule,
        RouterModule,
        AdminModule
        
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
