import { Injectable } from '@angular/core';
import { Product, DuplicatedProduct } from 'src/model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  _products = new BehaviorSubject<Product[]>(null);
  _productsNumber = new BehaviorSubject(0);
  _total = new BehaviorSubject<number>(0);
  _productIsIn = new BehaviorSubject<string>('');

  readonly products: Observable<Product[]> = this._products.asObservable();
  readonly productsNumber: Observable<number> = this._productsNumber.asObservable();
  readonly total: Observable<number> = this._total.asObservable();
  readonly productIsIn: Observable<string> = this._productIsIn.asObservable();

  _productsInCart: Product[] = [];
  _numberOfproductsInCart: number = 0;
  _totalSum: number = 0;
  _productIn: string = '';
  duplicates: DuplicatedProduct[] = [];

  constructor() {
  }

  /****************************************************************setters anf getters****************************** */
  /**getter and setter for the total some of the products */
  get totalSum(): number {
    return this._totalSum;
  }

  set totalSum(num: number) {
    this._totalSum = num;
  }

  /**getter and setter for the number of products in cart */
  get numberOfproductsInCart(): number {
    return this._numberOfproductsInCart;
  }

  set numberOfproductsInCart(num: number) {
    this._numberOfproductsInCart = num;
  }

  /**getter and setter for the producst in cart array */
  get productsInCart(): Product[] {
    return this._productsInCart;
  }

  set productsInCart(products: Product[]) {
    this._productsInCart = products;
  }

  /**setter and getter for where is product in(cart or product list view) */
  set productIn(productIsIn: string) {
    this._productIn = productIsIn;
    this._productIsIn.next(this.productIn);
  }

  get productIn(): string {
    return this._productIn;
  }

   /***********************************************************manage cart***************************************** */

  /**add product to cart, if same product was chosen more then once add it to duplicates array and update its count*/
  addProduct(product: Product) {
    const index = this.checkDuplicates(product);
    if (index < 0) { //no duplicates
      this.productsInCart.push(product);
      this._products.next(this.productsInCart.map(d => d));

      this.duplicates.push(new DuplicatedProduct(product.productId, 1));
    }
    else { //yes there are duplicates
      this.duplicates[index].count += 1;
    }
    this.numberOfproductsInCart += 1; //update amount of items
    this._productsNumber.next(this.numberOfproductsInCart);
    this.calculateSum();
  }

  /**delet product from cart, if there is more then one instance of the product update its count else delete */
  deleteProductFromCart(product: Product) {
    const indexP = this.checkDuplicates(product);
    if (this.duplicates[indexP].count <= 1) //no duplicates
    {
      const index = this.productsInCart.findIndex(function (element) {
        return element.title === product.title ? product : null;
      });
      this.productsInCart.splice(index, 1); //delete from the productList array
      this._products.next(this.productsInCart.map(d => d));
      this.duplicates.splice(indexP, 1);    //delete from the duplicates array
    }
    else { //yes there are duplicates
      this.duplicates[indexP].count -= 1;
    }
    this.numberOfproductsInCart -= 1; //update amount of items
    this._productsNumber.next(this.numberOfproductsInCart);
    this.calculateSum();
  }

  /**delete all products from cart when users sights out */
  deleteAllProducts() {
    this.duplicates = [];
    this.productsInCart = [];
    this._products.next(this.productsInCart.map(d => d));
    this.numberOfproductsInCart = 0;
    this._productsNumber.next(this.numberOfproductsInCart);
    this.calculateSum();
  }

  /**check if user added the same product more then one time */
  checkDuplicates(pr: Product): number {
    const matchIndex = this.duplicates.findIndex((element) => {
      return element.id === pr.productId ? true : false;
    });
    return matchIndex;
  }

  /**get product count if he was added to cart more then once*/
  getProductCount(product: Product) {
    if (this.checkDuplicates(product) >= 0)
      return this.duplicates[this.checkDuplicates(product)].count;
  }

  /**set product count if he was added to cart more then once in the cart with the input element*/
  setProductCount(product: Product, count: number) {
    if (this.checkDuplicates(product) >= 0)
      this.duplicates[this.checkDuplicates(product)].count = count;
  }

  /**calculate the total sum */
  calculateSum() {
    let sum = 0;
    for (let product of this.productsInCart) {
      sum = sum + (this.getProductCount(product) * product.price);
    }
    this.totalSum = sum;
    this._total.next(this.totalSum);
  }

}














// _showCartStatus: boolean;

  //get show cart status
  // get showCartStatus(): boolean {
  //   return this.showCartStatus;
  // }

  // //set show cart status
  // set showCartStatus(status) {
  //   this.showCartStatus = status;
  // }

/**get the items list in the cart */
  // getProductsInCart(): Observable<Product[]> {
  //   // return this.productsInCart;
  //   return this.pIC;
  // }

/**get the number of items in the cart */
  // getItemsCount() {
  //   return this.numberOfproductsInCart;
  // }