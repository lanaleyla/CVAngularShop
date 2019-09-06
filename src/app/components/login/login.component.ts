import { Component, OnInit } from '@angular/core';
import { CartService, UserService, PageService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _loginStatusText: string;
  constructor(private pageService: PageService, private cartService: CartService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  /**show login form */
  openLoginForm() {
    this.pageService.currentPage = 'login';
  }

  /**update user status */
  sightOut() {
    this.userService.userStatus = false;
    this.userService.user = null; //initalize the user on log out
    if (this.pageService.currentPage === 'cart' || this.pageService.currentPage === 'addProduct') //redirect bac to main page(home)
    {
      this.pageService.currentPage = 'home';
    }
    this.cartService.deleteAllProducts();
  }

  //get login status             
  get loginStatusText(): string {
    if (!this.userService.user)
      return 'SIGN IN';
    else return this.userService.user.name;
  }

}
