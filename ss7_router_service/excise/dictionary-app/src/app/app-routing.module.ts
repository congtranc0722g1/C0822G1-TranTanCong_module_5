import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionayPageComponentComponent} from './component/dictionay-page-component/dictionay-page-component.component';
import {DictionaryDetailComponentComponent} from './component/dictionary-detail-component/dictionary-detail-component.component';


const routes: Routes = [
  {path: '', component: DictionayPageComponentComponent},
  {path: 'detail/:id', component: DictionaryDetailComponentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
