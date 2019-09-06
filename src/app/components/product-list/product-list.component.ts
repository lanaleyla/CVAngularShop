import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/index';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showDetails = true;         //show product details view
  @Input() products: Product[];

  constructor() {
  }

  ngOnInit() { };

  /**product was pressed*/
  productPressed(e) {
    console.log(`the title is :" ${e.title}`);
    this.showDetails = true;
  }

}



