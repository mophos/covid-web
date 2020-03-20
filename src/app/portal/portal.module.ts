import { PipeModule } from './../pipe/pipe.module';
import { ApiService } from './service/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PipeModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    ApiService
  ]

})
export class PortalModule { }
