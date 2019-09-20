import { NgModule } from '@angular/core';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from '../shared/product-details/product-details.component';
import { AddEditProductFormComponent } from './add-edit-product-form/add-edit-product-form.component';
import { DirtyFormGuard } from '../core/guards/dirty-form.guard';

const routes: Routes = [
  { path: 'products', component: CategoriesListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'addEditProduct', component: AddEditProductFormComponent, canDeactivate: [DirtyFormGuard] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    DirtyFormGuard,
  ]
})
export class ProductsRoutingModule { }
