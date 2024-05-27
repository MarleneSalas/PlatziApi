import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

export const routes: Routes = [
  {path:'products',component:ProductListComponent},
  {path:'', redirectTo:"/products", pathMatch:"full"},
  {path: 'products/:id', component: ProductDetailComponent },
  {path: 'add-product', component: ProductAddComponent },
  {path:'edit-product/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
