import { Injectable } from '@angular/core';
import { Category, Product } from 'src/app/core/model/index';
import { HttpClient } from '@angular/common/http';
import { map, filter, take } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  _products = new BehaviorSubject<Product[]>([]);
  _categories=new BehaviorSubject<Category[]>([]);

  products: Observable<Product[]> = this._products.asObservable();
  categories:Observable<Category[]>=this._categories.asObservable();

  _productsArray: Product[] = [];
  _categoriesArray: Category[] = [];

  constructor(private http: HttpClient) {
    this.getProducts()
      .then(data => {
        this.productsArray = data;
        this._products.next(this._productsArray);
      })
      .catch(this.handleError)
    this.getCategories()
      .then(data => {
        this.categoriesArray = data;
        this._categories.next(this.categoriesArray);
      })
      .catch(this.handleError)
  }

  /*****************************************************setters and getters*************************************** */
  get productsArray(): Product[] {
    return this._productsArray;
  }

  set productsArray(products: Product[]) {
    this._productsArray = products;
  }

  get categoriesArray(): Category[] {
    return this._categoriesArray;
  }

  set categoriesArray(categories: Category[]) {
    this._categoriesArray = categories;
  }

  get productsO(): Observable<Product[]> {
    return this.products;
  }

  get categoriesO():Observable<Category[]>{
    return this.categories;
  }

  /*************************************************************management******************************************* */

  /**get the products list with the http request */
  getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>('assets/products.json')
      .pipe(
        map(data => data = data["products"])
      )
      .toPromise()
  }

  /**get the categories list with the http request */
  getCategories(): Promise<Category[]> {
    return this.http.get('assets/categories.json')
      .pipe(
        map(data => data = data["categories"])
      )
      .toPromise()
  }

  /**handle errors */
  private handleError(error: Response) {
    console.error(error);
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Promise.reject(msg || error);
  }

  /**get product list by chosen category */
  getProductListOnDemand(categoryId): Observable<Product[]> {
    if (categoryId === 'A') {
      return this.products;
    }
    else {
      return this.products
        .pipe(
          map(data => data.filter(element => element.categoryId === categoryId))
        )
    }
  }

  /**get product index by Id */    /////////////////////////fixxxxxxxxxx////////////////
  getProductById(id: number): number {
    return this.productsArray.findIndex((element) => {
      return element.productId === id;
    });
  }

  /**get product by id */
  getProduct(id: number): Promise<Product> {//////////////////////////////////fix/////////////////
    return this.products
      .pipe(
        filter(data => data.length > 0),
        map(data => data.find(element => element.productId === id)),
        take(1)
      ).toPromise();
  }

  /**add product to product list */
  addEditProduct(product: Product): boolean {
    const index = this.getProductById(product.productId); //search id product allready exists
    if (index >= 0) {
      this.productsArray[index] = product;
      this._products.next(this.productsArray);
      return true;
    } else {
      if (product) { //add new product to products list
        this.productsArray.push(product);
        this._products.next(this.productsArray);
        return true;
      }
      else return false;
    }
  }

  /**remove product from the list */
  removeProduct(product: Product): boolean {
    const index = this.getProductById(product.productId); //search id product allready exists
    if (index >= 0) {
      this.productsArray.splice(index, 1);
      this._products.next(this.productsArray);
      return true;
    }
    else return false;
  }
}
