import { Injectable } from '@angular/core';
import { Category, Product } from 'src/model/index';
import products from 'src/assets/products.json';
import categories from 'src/assets/categories.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  /**get product list by chosen category */
  getProductListOnDemand(categoryId): Product[] {
    let p: Product[] = [];
    if (categoryId === 'A') {
      p = this.getAllProducts();
    }
    else {
      p = this.getAllProducts().filter(product =>
        product.categoryId === categoryId
      );
    }
    return p;
  }

  /**get all products */
  getAllProducts(): Product[] {
    return products.products;
  }

  /**get all categories */
  getCategories(): Category[] {
    return categories.categories;
  }

}
