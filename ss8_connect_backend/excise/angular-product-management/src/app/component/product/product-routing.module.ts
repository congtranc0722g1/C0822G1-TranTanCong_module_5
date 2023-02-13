import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'products-create', component: ProductCreateComponent},
  {path: 'products-edit/:id', component: ProductUpdateComponent},
  {path: 'products-delete/:id', component: ProductDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
