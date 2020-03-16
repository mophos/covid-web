import { ApiService } from './service/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    PortalRoutingModule
  ],
  providers: [
    ApiService
  ]

})
export class PortalModule { }
