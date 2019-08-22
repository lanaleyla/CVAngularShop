import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/model/index';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {

  @Input() product: Product; //chosen product that was passed from the list of products
  @Input() productIn:string;
  @Output() clickOnBackEvent = new EventEmitter();

  constructor(private cartService: CartService) { }

  /**when pressing back initialize the product to null */
  backToProductView() { 
    this.clickOnBackEvent.emit(null);
  }

  /**add product to the cart */
  addProductToCart(product:Product) {
    this.cartService.addProduct(product);
  }
  
  /**delete item from cart when remove button pressed */
  deleteProductFromCart(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }

  /**get the number of times the user added product to cart */
  get productCount():number{
    return this.cartService.getProductCount(this.product);
  }
}
