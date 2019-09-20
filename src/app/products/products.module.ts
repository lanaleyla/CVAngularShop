import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditProductFormComponent } from './add-edit-product-form/add-edit-product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriesListComponent, ProductComponent, ProductListComponent,AddEditProductFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
