import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ListFacilityComponent} from "./component/facility/list-facility/list-facility.component";
import {CreateFacilityComponent} from "./component/facility/create-facility/create-facility.component";
import {EditFacilityComponent} from "./component/facility/edit-facility/edit-facility.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility', component: ListFacilityComponent},
  {path: 'facility-edit', component: EditFacilityComponent},
  {path: 'facility-create', component: CreateFacilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
