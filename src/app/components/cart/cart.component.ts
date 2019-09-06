import { Component, OnInit, } from '@angular/core';
import { Product } from 'src/model';
import { CartService, PageService } from 'src/app/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = 'cart'; //used in the productDetails component(show remove button and quantity)

  constructor(private cartService: CartService, private pageService: PageService) { }

  ngOnInit() {
  }

  /**get the products list in the cart */
  get productsList(): Product[] {
    return this.cartService.getProductsInCart();
  }

  /**close cart view*/
  closeCartView() {
    this.pageService.backToPrev();
  }

  /**get the total sum of the products in cart*/
  get totalSumOfProducts(): number {
    return this.cartService.totalSum;
  }

  /**get the total number of products in cart*/
  get numberOfproductsInCart(): number {
    return this.cartService.numberOfproductsInCart;
  }

  /**show product details */
  openDetails(id: string) {
    this.cartService.productIn='cart';
    this.pageService.currentPage = `cart/products/${id}`;
  }



}
