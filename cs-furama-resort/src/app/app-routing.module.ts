import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ListFacilityComponent} from "./component/facility/list-facility/list-facility.component";
import {CreateFacilityComponent} from "./component/facility/create-facility/create-facility.component";
import {EditFacilityComponent} from "./component/facility/edit-facility/edit-facility.component";
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./component/customer/edit-customer/edit-customer.component";
import {ListContractComponent} from "./component/contract/list-contract/list-contract.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility', component: ListFacilityComponent},
  {path: 'facility-edit/:id', component: EditFacilityComponent},
  {path: 'facility-create', component: CreateFacilityComponent},
  {path: 'customer', component: ListCustomerComponent},
  {path: 'customer-create', component: CreateCustomerComponent},
  {path: 'customer-edit/:id', component: EditCustomerComponent},
  {path: 'contract', component: ListContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
