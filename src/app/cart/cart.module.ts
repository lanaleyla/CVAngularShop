import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
