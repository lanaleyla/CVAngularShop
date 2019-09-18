import { Component, OnInit, Input } from '@angular/core';
import { CartService, PageService } from '../../services/index';
import { Product } from 'src/model';

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

  /**delete item from cart when remove button pressed */
  deleteProductFromCart(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }

  /**get the number of times the user added product to cart */
  get productCount(): number {
    return this.cartService.getProductCount(this.product);
  }

  /**add product to the cart */
  addProductToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  /**show product details */
  openDetails(id: string) {
    this.cartService.productIn='cart';
    this.pageService.currentPage = `cart/products/${id}`;
  }
}
