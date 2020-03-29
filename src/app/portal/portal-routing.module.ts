import { CommandComponent } from './command/command.component';
import { ProfressionalComponent } from './profressional/profressional.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { BedsComponent } from './beds/beds.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'portal',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'beds', component: BedsComponent },
      { path: 'supplies', component: SuppliesComponent },
      { path: 'professional', component: ProfressionalComponent },
      { path: 'command', component: CommandComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
