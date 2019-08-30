import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/model/index';
import { CartService,UserService,PermissionService,PageService } from 'src/app/services/index';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {

  @Input() product: Product; //chosen product that was passed from the list of products
  @Input() productIn: string;
  @Output() clickOnBackEvent = new EventEmitter();

  constructor(private cartService: CartService, private userService: UserService,private permissionService:PermissionService,private pageService:PageService ) { }

  /**when pressing back initialize the product to null */
  backToProductView() {
    this.clickOnBackEvent.emit(null);
  }

  /**get user status(logged in or not) */
  get userStatus(): boolean {
    return this.userService.userStatus;
  }
  
  /**add product to the cart */
  addProductToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  /**delete item from cart when remove button pressed */
  deleteProductFromCart(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }

  /**get the number of times the user added product to cart */
  get productCount(): number {
    return this.cartService.getProductCount(this.product);
  }
  
  /**get users premission */
  get permission(): boolean {
    return this.permissionService.getUserPremission();
  }

  /**send product to edit and redirect to add edit page */
  editProduct() {
    this.pageService.currentPage = 'addProduct';
    this.userService.setProductToEdit(this.product); //send the product to edit
  }
}
