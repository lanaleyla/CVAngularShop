import { Component, OnInit, Input } from '@angular/core';
import { Category, Product } from 'src/model/index';
import { DataService } from 'src/app/services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})

export class CategoriesListComponent implements OnInit {

  categoryId: string = 'A';          //category id of the category the user has chosen
  productList = 'list';              //for the details to recognize how to show the product view
  productsArray: Observable<Product[]>;
  categoriesArray:Observable<Category[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.productsArray = this.dataService.getProductListOnDemand(this.categoryId); ////////may be fix this//////////////////*****************/ */
    this.categoriesArray=this.dataService.categoriesO;
  }

  /**update when category is chosen*/
  showProducts(e) {
    this.categoryId = e.name;
    this.productsArray=this.dataService.getProductListOnDemand(this.categoryId);
  }

}
