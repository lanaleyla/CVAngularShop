import { Component, OnInit, Input } from '@angular/core';
import { PageService, CartService } from '../../core/services/index';
import { Product } from '../../core/model/index';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product;
  constructor(private cartService: CartService, private pageService: PageService) { }

  ngOnInit() {
  }

  /**get the number of times the user added product to cart */
  get productCount(): number {
    return this.cartService.getProductCount(this.product);
  }

  /**delete item from cart when remove button pressed */
  deleteProductFromCart(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }

  /**add product to the cart */
  addProductToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  /**show product details */
  openDetails(id: string) {
    this.cartService.productIn = 'cart';
    this.pageService.currentPage = `cart/products/${id}`;
  }
}
