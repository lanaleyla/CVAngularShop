import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myState', [
      state('active', style({ transform: 'translateX(0)' })),
      transition('void => true', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
    ]),
    trigger('open', [
      state('active', style({
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: '#e6e6e6',
        opacity: '0.6',
      })),
    ]),
  ]
})

export class AppComponent {

  title = 'shop';
  message = 'home';        //the option the user chose from the sidebar menu
  menuClicked = false;     //if user clicked on menu icon in the top bar
  optionClicked = false;   //option within the menu was clicked(home,about,products,contact) for animation

  constructor(private cartService: CartService) {
  }

  /**update visability of side bar menu */
  updateMenu(e) { 
    this.menuClicked = e;
    if (this.menuClicked) {//if the menu was clicked ,option was not chosen yet
      this.optionClicked = false;
    }
  }

  /**update the option the user has chosen (home,about,products,contact) */
  updateMessage(e) {
    if (e !== this.message) {
      this.message = e;
      this.optionClicked = true;
    }
    this.cartService._showCartStatus = false; //hide cart if your are on cart view
  }

  /**get show cart status(hide/show) */
  get showCart() {
    return this.cartService._showCartStatus;
  }

  /**status if side bar has opened for animation */
  get status(): string { 
    return this.menuClicked ? 'active' : 'inactive';
  }

  /**status if user clicked on option from side bar for animation */
  get OptionStatus() { 
    return this.optionClicked ? 'true' : 'false';
  }
}
