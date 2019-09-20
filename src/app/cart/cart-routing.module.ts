import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from '../shared/product-details/product-details.component';
import { Routes, RouterModule } from '@angular/router';
import { LogedInGuard } from '../core/guards/loged-in.guard';

const routes: Routes = [
  {
    path: '', component: CartComponent, canActivate: [LogedInGuard],
    children: [{
      path: 'products/:id', component: ProductDetailsComponent
    }]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule { }
