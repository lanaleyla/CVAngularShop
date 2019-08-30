import { Injectable } from '@angular/core';
import users from 'src/assets/users.json';
import { User } from 'src/model/user';
import { Product } from 'src/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = users.users; //get users list
  _user: User = null;
  product: Product; //product to edit

  constructor() { }

  /**get user */
  get user(): User {
    return this._user;
  }

  /**set user */
  set user(user: User) {
    this._user = user;
  }

  /**get the users status */
  get userStatus(): boolean {
    if (!this._user) {
      return false;
    }
    return this._user.status;
  }

  /**set users status */
  set userStatus(status: boolean) {
    this.updateUserStatus(this.user.name, status); //update users list with the user status
    this._user.status = status;
  }

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
  }


}




