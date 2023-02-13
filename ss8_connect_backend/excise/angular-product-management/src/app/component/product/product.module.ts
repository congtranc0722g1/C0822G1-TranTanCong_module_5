import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductComponent} from './product.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductListComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule {
}
