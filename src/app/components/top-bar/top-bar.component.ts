import { Component, EventEmitter, Output } from '@angular/core';
import { CartService, UserService, PageService } from 'src/app/services';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private cartService: CartService, private userService: UserService, private pageService: PageService) { }

  @Output() clickOnMenuEvent = new EventEmitter();//on menu icon click

  /**send true to open side bar on menu click */
  openSidebar() {
    this.clickOnMenuEvent.emit(true);
  }

  /**get the nimber of items in cart */
  get numberOfItemsInCart(): number {
    return this.cartService.getItemsCount();
  }

  /**show cart view */
  openCart() {
    this.pageService.currentPage = 'cart';
    this.cartService._showCartStatus = true;
    this.cartService.productIn='';
  }

  /**show login form */
  openLoginForm() {
    this.pageService.currentPage = 'login';
  }

  /**get the status of the user (logged in or not) */
  get loginStatus(): boolean {
    return this.userService.userStatus;
  }

}
