import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/model/index';
import { CartService, UserService, PageService, PermissionService } from 'src/app/services/index';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private cartService: CartService, private userService: UserService, private pageService: PageService, private permissionService: PermissionService) { }

  ngOnInit() { };

  @Input() product: Product;  

  /**get users premission */
  get permission(): boolean {
    return this.permissionService.getUserPremission();
  }

  /**get user status(logged in or not) */
  get userStatus(): boolean {
    return this.userService.userStatus;
  }

  /**redirect to product details view */
  showProductDetails() {
    this.cartService.productIn = '';
    this.pageService.currentPage = `product/${this.product.productId}`;
  }

  /**add product to the cart on add button click*/
  addToCart() {
    this.cartService.addProduct(this.product);
  }

  /**send product to edit and redirect to add edit page */
  editProduct() {
    this.pageService.currentPage = 'addEditProduct';
    this.userService.setProductToEdit(this.product); //set the product to edit
  }

}
