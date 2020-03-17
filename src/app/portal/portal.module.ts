import { PipeModule } from './../pipe/pipe.module';
import { ApiService } from './service/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { DirectiveModule } from './directive/directive.module';


@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PipeModule
  ],
  providers: [
    ApiService
  ]

})
export class PortalModule { }
