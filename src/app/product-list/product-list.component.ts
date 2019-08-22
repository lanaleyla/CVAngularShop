import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/index';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showDetails = true;         //show product details view
  @Output() productPressedEvent = new EventEmitter();
  @Input() products: Product[];

  constructor() {
  }

  ngOnInit() { };

  /**pass the product to product details component*/
  passProductPressed(e) { 
    console.log(`the title is :" ${e.title}`);
    this.showDetails = true;
    this.productPressedEvent.emit(e); //send product to product details
  }

}



