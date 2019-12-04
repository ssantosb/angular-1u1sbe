import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {ProjectIterationComponent} from './project-iteration.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ProjectService} from '../project.service';
import {Project} from '../project';
import {Iteration} from '../iteration';

describe('BookReviewsComponent', () => {
    let component: ProjectIterationComponent;
    let fixture: ComponentFixture<ProjectIterationComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ProjectService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectIterationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});