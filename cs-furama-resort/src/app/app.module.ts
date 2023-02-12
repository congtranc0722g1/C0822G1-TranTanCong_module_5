import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ListFacilityComponent } from './component/facility/list-facility/list-facility.component';
import { CreateFacilityComponent } from './component/facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './component/facility/edit-facility/edit-facility.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './component/customer/edit-customer/edit-customer.component';
import { ListContractComponent } from './component/contract/list-contract/list-contract.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { InfoFacilityComponent } from './component/facility/info-facility/info-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ListContractComponent,
    InfoFacilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
