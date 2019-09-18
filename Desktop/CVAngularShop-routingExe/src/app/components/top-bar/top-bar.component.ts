import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CartService, PageService } from 'src/app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  numberOfProductsInCart: Observable<number>;

  constructor(private cartService: CartService, private pageService: PageService) { }

  @Output() clickOnMenuEvent = new EventEmitter();//on menu icon click

  ngOnInit() {
    /**assgin to observable */
    this.numberOfProductsInCart = this.cartService.productsNumber;
  }

  /**send true to open side bar on menu click */
  openSidebar() {
    this.clickOnMenuEvent.emit(true);
  }

  /**show cart view */
  openCart() {
    this.pageService.currentPage = 'cart'; //ob
  }

  /**show login form */
  openLoginForm() {
    this.pageService.currentPage = 'login';
  }
}













// this.cartService.showCartStatus = true;


/**get the nimber of items in cart */
  // get numberOfItemsInCart(): number {
  //   return this.cartService.getItemsCount();
  // }