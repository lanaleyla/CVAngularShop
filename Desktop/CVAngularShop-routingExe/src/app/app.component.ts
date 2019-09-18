import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { CartService } from 'src/app/services/index';
import { slideInAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation,
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
  menuClicked = false;     //if user clicked on menu icon in the top bar open with animation

  constructor(private cartService: CartService) {
  }

  /**update visability of side bar menu */
  updateMenu(e) {
    this.menuClicked = e;
  }

  /**status if side bar has opened for animation */
  get status(): string {
    return this.menuClicked ? 'active' : 'inactive';
  }
}



/**get show cart status(hide/show) */
  // get showCart() {
  //   return this.cartService._showCartStatus;
  // }

/**update the option the user has chosen (home,about,products,contact) */
  // updateMessage(e) {
  //   // this.cartService._showCartStatus = false; //hide cart if your are on cart view
  // }