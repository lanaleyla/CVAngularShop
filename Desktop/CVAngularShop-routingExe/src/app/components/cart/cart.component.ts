import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/model';
import { CartService, PageService } from 'src/app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cart = 'cart'; //used in the productDetails component(show remove and add button)
  productList: Observable<Product[]>;
  numberOfProducts: Observable<number>;
  totalSum: Observable<number>;

  constructor(private cartService: CartService, private pageService: PageService) {
  }

  ngOnInit() {
    /**assign observables */
    this.productList = this.cartService.products;
    this.numberOfProducts = this.cartService.productsNumber;
    this.totalSum = this.cartService.total;
  }

  ngOnDestroy() {
    this.cartService.productIn = '';
  }

  /**show product details */
  openDetails(id: string) {
    this.pageService.currentPage = `cart/products/${id}`;
  }
}



























/**get the products list in the cart */
  // productsList() {
    // this.cartService.pIC.subscribe(data => {
    //   console.log(data);
    //   this.productL=data;
    // });
  // }

/**get the total number of products in cart*/
  // get numberOfproductsInCart(): number {
  //   return this.cartService.numberOfproductsInCart;
  // }

/**get the total sum of the products in cart*/
  // get totalSumOfProducts(): number {
  //   return this.cartService.totalSum;
  // }


  /**close cart view*/
  // closeCartView() {
  //   this.pageService.backToPrev();
  // }