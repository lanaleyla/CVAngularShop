import { Injectable } from '@angular/core';
import users from 'src/assets/users.json';
import { Product, User } from 'src/model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = users.users; //get users list
  _user: User = null;

  _productToEdit = new BehaviorSubject<Product>(null);
  readonly productToEdit: Observable<Product> = this._productToEdit.asObservable();
  _product: Product; //product to edit 

  constructor() { }

  ////////////////////////////////////////////////////////manegment/////////////////////////////////////////

  get product(): Product {
    return this._product;
  }

  set product(product: Product | null) {
    this._product = product;
    this._productToEdit.next(this.product);
  }

  /**return the observable */
  get productToEditO(): Observable<Product> {
    return this.productToEdit;
  }

  /**get user */
  get user(): User {
    return this._user;
  }

  /**set user */
  set user(user: User) {
    if (user === null) {
      this.userStatus = false;
    }
    this._user = user;
  }

  /**get the users status */
  get userStatus(): boolean {
    if (!this.user) {
      return false;
    }
    return this.user.status;
  }

  /**set users status */
  set userStatus(status: boolean) {
    this.updateUserStatus(this.user.name, status); //update users list with the user status
  }

  ////////////////////////////////////////////////////////manegment/////////////////////////////////////////

  /**get user by its name, check passward*/
  getUser(name: string, passward: string): User {
    return (this.users.find((element) => {
      return element.name === name && element.name === passward; //validation
    }))
  }

  /**return list of all the users */
  getAllUsers(): User[] {
    return users.users;
  }

  /**update user status on login/logout */
  updateUserStatus(name: string, status: boolean) {
    for (let user of this.users) {
      if (user.name === name) {
        user.status = status;
      }
    }
  }

  /**set the chosen product to edit (sent from the product list) */
  setProductToEdit(product: Product) {
    this.product = product;
    this._productToEdit.next(this.product);
  }

}




