import { Routes, RouterModule } from '@angular/router';
import {  ModuleWithProviders  } from '@angular/core';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerOtpComponent } from './customer-otp/customer-otp.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {
     path: '',
     pathMatch: 'full',
     component: CustomerInfoComponent
    },
    {
      path: 'customer-otp',
      component: CustomerOtpComponent
     },
 
    ];

    @NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }
      export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
      