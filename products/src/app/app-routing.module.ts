import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLisComponent } from './product-lis/product-lis.component';

const routes: Routes = [{path:'',component:ProductLisComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
