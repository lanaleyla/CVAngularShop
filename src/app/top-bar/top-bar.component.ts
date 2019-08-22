import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private cartService: CartService) { }

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
    this.cartService._showCartStatus=true;
  }
}
