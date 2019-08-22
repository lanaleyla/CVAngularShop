import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/index';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private cartService: CartService) { }
  
  ngOnInit() { };

  @Input() product: Product;  //chosen product on press
  @Input() showData = false;  //show/hide product 
  @Output() clickOnProductEvent = new EventEmitter();

  /**send the chosen product to product-list */
  showDetails() {
    this.clickOnProductEvent.emit(this.product); //send the chosen product to product list
  }

  /**add product to the cart*/
  addToCart() {
    this.cartService.addProduct(this.product);
  }
}
