import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Input() product: Product;  //chosen product on press
  @Input() showData = false;  //show/hide product 
  @Output() clickOnProductEvent = new EventEmitter();

  /**send the chosen product to product-list */
  showDetails() {
    this.clickOnProductEvent.emit(this.product); //send the chosen product to product list
    this.cartService.productIn='';
    this.pageService.currentPage = `product/${this.product.productId}`;
  }

  /**add product to the cart*/
  addToCart() {
    this.cartService.addProduct(this.product);
  }

  /**get user status(logged in or not) */
  get userStatus(): boolean {
    return this.userService.userStatus;
  }

  /**send product to edit and redirect to add edit page */
  editProduct() {
    this.pageService.currentPage = 'addEditProduct';
    this.userService.setProductToEdit(this.product); //send the product to edit
  }

  /**get users premission */
  get permission(): boolean {
    return this.permissionService.getUserPremission();
  }

}
