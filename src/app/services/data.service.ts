import { Injectable } from '@angular/core';
import { Category, Product } from 'src/model/index';
import products from 'src/assets/products.json';
import categories from 'src/assets/categories.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = products.products;
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

  /**get product by Id */
  getProductById(id: number): number {
    return this.products.findIndex((element) => {
      return element.productId === id; 
    });
  }

  getProduct(id:number):Product{
    console.log(id);
    console.log(this.getProductById(id));
    console.log(this.products[this.getProductById(id)]);
    return this.products[this.getProductById(id)];
  }

  /**get all products */
  getAllProducts(): Product[] {
    return products.products;
  }

  /**get all categories */
  getCategories(): Category[] {
    return categories.categories;
  }

  /**add product to product list */
  addEditProduct(product: Product): boolean {
    const index = this.getProductById(product.productId); //search id product allready exists
    if (index >= 0) {
      this.products[index] = product;
      return true;
    } else {
      if (product) { //add new product to products list
        this.products.push(product);
        return true;
      }
      else return false;
    }
  }

  /**remove product from the list */
  removeProduct(product: Product): boolean {
    const index = this.getProductById(product.productId); //search id product allready exists
    if (index >= 0) {
      this.products.splice(index, 1);
      return true;
    }
    else return false;
  }
}
