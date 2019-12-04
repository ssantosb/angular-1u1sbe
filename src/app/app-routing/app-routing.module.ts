import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { HomeComponent } from '../home/home.component';
import { HardwareListComponent } from '../hardware/hardware-list/hardware-list.component';
import { HardwareDetailComponent } from '../hardware/hardware-detail/hardware-detail.component';
import { HardwareCreateComponent } from '../hardware/hardware-create/hardware-create.component';

import {ProjectListComponent} from '../project/project-list/project-list.component';
import {ProjectDetailComponent} from '../project/project-detail/project-detail.component';
import {ProjectCreateComponent} from '../project/project-create/project-create.component';

import { DeveloperListComponent } from '../developer/developer-list/developer-list.component';
import { DeveloperDetailComponent } from '../developer/developer-detail/developer-detail.component';
import { DeveloperCreateComponent } from '../developer/developer-create/developer-create.component';

import { RequesterListComponent } from '../requester/requester-list/requester-list.component';
import { RequesterCreateComponent } from '../requester/requester-create/requester-create.component';
import { RequesterDetailComponent } from '../requester/requester-detail/requester-detail.component';

import { ProviderListComponent } from '../provider/provider-list/provider-list.component';
import { ProviderDetailComponent } from '../provider/provider-detail/provider-detail.component';
import { ProviderCreateComponent } from '../provider/provider-create/provider-create.component';

import { UnitListComponent } from '../unit/unit-list/unit-list.component';
import { UnitDetailComponent } from '../unit/unit-detail/unit-detail.component';
import { UnitCreateComponent } from '../unit/unit-create/unit-create.component';

import {RequestListComponent} from '../request/request-list/request-list.component';
import {RequestDetailComponent} from '../request/request-detail/request-detail.component';

import { AdminModComponent } from '../admin/admin-mod/admin-mod.component';
import { RequestCreateComponent } from '../request/request-create/request-create.component';

const routes: Routes = [

    {
     path: 'auth',
     children: [
         {
             path: 'login',
             component: AuthLoginComponent,
             canActivate: [NgxPermissionsGuard],
             data: {
                 permissions: {
                     only: ['GUEST']
                 }
             }
         },
         {
             path: ':sign-up',
             component: AuthSignUpComponent,
             canActivate: [NgxPermissionsGuard],
             data: {
                 permissions: {
                     only: ['GUEST']
                 }
             }
         }
     ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'mod',
          component: AdminModComponent,
          canActivate: [NgxPermissionsGuard],
             data: {
                 permissions: {
                     only: ['ADMIN']
                 }
             }
        }
      ]
    },
    {
        path: 'home',
        component: HomeComponent
    },

    {
    path: 'providers',
    children: [
      {
        path: 'list',
        component: ProviderListComponent
      },
      {
        path: 'agregar',
        component: ProviderCreateComponent,
        outlet:'detail'
      },
      {
        path: ':id',
        component: ProviderDetailComponent,
        outlet:'detail'
      }
    ]
  },
  {
    path: 'projects',
    children: [
      {
        path: 'list',
        component: ProjectListComponent,

      },
      {
        path: ':id',
        component: ProjectDetailComponent,
        outlet:'detail'
      },
    
      {
       path:'agregar',
        component:ProjectCreateComponent,
        outlet:'detail'
       }
    ]
  },
  {
    path: 'projectos',
    children: [{
      path:'agregar',
      component:ProjectCreateComponent,
      outlet:'detail'
    }
    ]
  },
  {
  path: 'units',
  children: [
    {
      path: 'list',
      component: UnitListComponent
    },
    {
      path: 'agregar',
      component: UnitCreateComponent,
      outlet:'detail'
    },
    {
      path: ':id',
      component: UnitDetailComponent,
      outlet:'detail'
    }
  ]
},

 

  {
    path: 'requesters',
    children: [{
      path: 'list',
      component: RequesterListComponent
    },
    {
      path: ':id',
      component: RequesterDetailComponent,
      outlet: 'detail'
    },
    {
      path: 'add',
      component: RequesterCreateComponent,
      outlet: 'create'
    }
    ]
  },

  {
    path: 'developers',
    children: [{
      path: 'list',
      component: DeveloperListComponent
    },
    {
      path: ':id',
      component: DeveloperDetailComponent,
      outlet: 'detail'
    },
    {
      path: 'add',
      component: DeveloperCreateComponent,
      outlet: 'create'

    }
    ]
  },

  {
    path: 'hardwares',
    children: [{
      path: 'list',
      component: HardwareListComponent
    },
    {
      path: ':id',
      component: HardwareDetailComponent,
      outlet: 'detail'
    },
    {
      path: 'agregar',
      component: HardwareCreateComponent,
      outlet: 'create'


    }
    ]
  },
  {
    path: 'requests',
    children: [{
      path: 'list',
      component: RequestListComponent
    },
    {
      path: ':id',
      component: RequestDetailComponent,
      outlet: 'detail'
    },
    {
      path: 'agregar',
      component: RequestCreateComponent,
      outlet: 'create'
    }
    ]
  }


];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
