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
    let index = this.checkDuplicates(product);
    if (index < 0) { //no duplicates
      this.productsInCart.push(product);
      this.duplicates.push(new DuplicatedProduct(product.title, 1));
    }
    else { //yes there are duplicates
      this.duplicates[index].count += 1;
    }
    this.numberOfproductsInCart += 1; //update amount of items
    this.totalSum = this.totalSum + product.price; //update sum of items
  }

  /**delet product from cart, if there is more then one instance of the product update its count else delete */
  deleteProductFromCart(product: Product) {
    let indexP = this.checkDuplicates(product);
    if (this.duplicates[indexP].count <= 1) //no duplicates
    {
      let index = this.productsInCart.findIndex(function (element) {
        return element.title === product.title ? product : null;
      });
      this.productsInCart.splice(index, 1); //delete from the productList array
      this.duplicates.splice(indexP, 1);    //delete from the duplicates array
    }
    else { //yes there are duplicates
      this.duplicates[indexP].count -= 1;
    }
    this.numberOfproductsInCart -= 1; //update amount of items
    this.totalSum = this.totalSum - product.price; //update sum of items
  }

  /**check if user added the same product more then one time */
  checkDuplicates(pr: Product): number {
    let matchIndex = this.duplicates.findIndex((element) => {
      return element.title === pr.title ? true : false;
    });
    return matchIndex;
  }

  /**get product count if he was added to cart more then once*/
  getProductCount(product:Product)
  {
    if( this.checkDuplicates(product)>=0)
    return this.duplicates[this.checkDuplicates(product)].count;
  }
}
