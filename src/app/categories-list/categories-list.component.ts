import { Component, OnInit, Input } from '@angular/core';
import { Category, Product } from 'src/model/index';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})

export class CategoriesListComponent implements OnInit {

  @Input() pressedProduct: Product;  //the product the user pressed on
  categoryId: string = 'A';          //category id of the category the user chose
  productList = 'productList';       //for the details to recognize how to show the product view

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  /**get categories list */
  get categoriesArray(): Category[] {
    return this.dataService.getCategories();
  }

  /**get products list */
  get productsArray(): Product[] {
    return this.dataService.getProductListOnDemand(this.categoryId);
  }

  /**update when category is chosen*/
  showProducts(e) {
    this.categoryId = e.name; 
  }

  /**update product-details view(show/hide)*/
  updateProductView(e: Product) {
    this.pressedProduct = e;
  }

  /**when pressing back initialize the product to null*/
  backToProductView() {
    this.pressedProduct = null;
  }

}
