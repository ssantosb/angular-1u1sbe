import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { ProjectAddIterationComponent } from './project-add-iteration.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ProjectService} from '../project.service';
import {Project} from '../project';

describe('BookAddReviewComponent', () => {
  let component: ProjectAddIterationComponent;
    let fixture: ComponentFixture<ProjectAddIterationComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                ProjectService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectAddIterationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});