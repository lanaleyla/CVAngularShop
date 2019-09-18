import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/index';
import { CartService, UserService, PermissionService, PageService, DataService } from 'src/app/services/index';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product; //chosen product that was passed from the list of products
  subscription: Subscription;
  productIsIn: Observable<string>;

  constructor(private dataService: DataService, private cartService: CartService, private userService: UserService, private permissionService: PermissionService, private pageService: PageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(p =>
      this.loadProduct(+p.get('id')),
    );
    this.productIsIn = this.cartService.productIsIn; //assign the observabel that knows the location of the product details(cart or product list)
  }

  /////////////////////////////////////getters///////////////////////////////////////////////

  /**get user status(logged in or not) */
  get userStatus(): boolean {
    return this.userService.userStatus;
  }

  /**get users premission */
  get permission(): boolean {
    return this.permissionService.getUserPremission();
  }

  ////////////////////////////////////managment//////////////////////////////////////////////

  loadProduct(id: number) {
    this.dataService.getProduct(id).then(data => this.product = data);
  }

  /**add product to the cart */
  addProductToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  /**delete item from cart when remove button pressed */
  deleteProductFromCart(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }

  /**send product to edit and redirect to add edit page */
  editProduct() {
    this.pageService.currentPage = 'addEditProduct';
    this.userService.setProductToEdit(this.product); //send the product to edit
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**back */
  backToProductView() {
    this.pageService.backToPrev();
  }

}