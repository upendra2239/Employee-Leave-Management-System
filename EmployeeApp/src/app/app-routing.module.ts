import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { LeavereqComponent } from './leavereq/leavereq.component';
import { DetailsComponent } from './details/details.component';
import { LeavemgtComponent } from './leavemgt/leavemgt.component';

const routes: Routes = [
  {path: 'details', component: DetailsComponent},
  {path: 'leavereq', component: LeavereqComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'leavemgt', component: LeavemgtComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LeavereqComponent, ManagerComponent,DetailsComponent,LeavemgtComponent]