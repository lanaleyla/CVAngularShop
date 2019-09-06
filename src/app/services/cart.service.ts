import { Injectable } from '@angular/core';
import { Product, DuplicatedProduct } from 'src/model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInCart: Product[] = [];
  duplicates: DuplicatedProduct[] = [];
  _showCartStatus: boolean;
  totalSum: number = 0;
  numberOfproductsInCart: number = 0;
  _productIn: string='';

  constructor() {
  }

  /**get the number of items in the cart */
  getItemsCount() {
    return this.numberOfproductsInCart;
  }

  //get show cart status
  get showCartStatus(): boolean {
    return this.showCartStatus;
  }

  //set show cart status
  set showCartStatus(status) {
    this.showCartStatus = status;
  }

  /**get the items list in the cart */
  getProductsInCart(): Product[] {
    return this.productsInCart;
  }

  /**add product to cart, if same product was chosen more then once add it to duplicates array and update its count*/
  addProduct(product: Product) {
    const index = this.checkDuplicates(product);
    if (index < 0) { //no duplicates
      this.productsInCart.push(product);
      this.duplicates.push(new DuplicatedProduct(product.title, 1));
    }
    else { //yes there are duplicates
      this.duplicates[index].count += 1;
    }
    this.numberOfproductsInCart += 1; //update amount of items
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
      this.duplicates.splice(indexP, 1);    //delete from the duplicates array
    }
    else { //yes there are duplicates
      this.duplicates[indexP].count -= 1;
    }
    this.numberOfproductsInCart -= 1; //update amount of items
    this.calculateSum();
  }

  /**delete all products from cart when users sights out */
  deleteAllProducts() {
    this.duplicates = [];
    this.productsInCart = [];
    this.numberOfproductsInCart = 0;
    this.totalSum = 0;
  }

  /**check if user added the same product more then one time */
  checkDuplicates(pr: Product): number {
    const matchIndex = this.duplicates.findIndex((element) => {
      return element.title === pr.title ? true : false; /*****************************fix this */
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
  }

  set productIn(productIsIn: string) {
    console.log(productIsIn);
    this._productIn = productIsIn;
  }

  get productIn(): string {
    console.log(this._productIn);
    return this._productIn;
  }

}
