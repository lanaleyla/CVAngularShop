import { Component, OnInit } from '@angular/core';
import { CartService, UserService, PageService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _loginStatusText: string = '';

  constructor(private pageService: PageService, private cartService: CartService, private userService: UserService) {
  }

  ngOnInit() {
  }

  /**show login form */
  openLoginForm() {
    this.pageService.currentPage = 'login';
  }

  /**update user status */
  sightOut() {
    this.userService.user = null; //initalize the user on log out
    this.pageService.currentPage = 'login';
    this.cartService.deleteAllProducts();
  }

  /**get login status*/
  get loginStatusText(): string {
    if (!this.userService.user)
      return 'SIGN IN';
    else return this.userService.user.name;
  }
}















 // if (this.pageService.currentPage === 'cart' || this.pageService.currentPage === 'addEditProduct') //redirect bac to main page(home)
    // {