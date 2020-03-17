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
<<<<<<< HEAD
    PortalRoutingModule,
    DirectiveModule
=======
    PortalRoutingModule
  ],
  providers: [
    ApiService
>>>>>>> 6e1d6227b1dc3a7e5c53657b7131f8c2318dcfd6
  ]

})
export class PortalModule { }
