import { Component, Input, Output, OnInit, EventEmitter, OnChanges } from '@angular/core';
import { Product } from 'src/model/index';
import { CartService, UserService, PermissionService, PageService, DataService } from 'src/app/services/index';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit, OnChanges {

  @Input() product: Product; //chosen product that was passed from the list of products
  @Output() clickOnBackEvent = new EventEmitter();
  subscription: Subscription;

  constructor(private dataService: DataService, private cartService: CartService, private userService: UserService, private permissionService: PermissionService, private pageService: PageService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.product === undefined || this.product === null) //if there is no product input
    {
      this.subscription = this.route.paramMap.subscribe(p => this.loadProduct(+p.get('id')));
    }
  }

  ngOnChanges() {
    // console.log(this.productIsIn);
  }

  get productI(): string {
    return this.cartService.productIn;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadProduct(id: number) {
    this.product = this.dataService.getProduct(id);
  }

  /**when pressing back initialize the product to null */
  backToProductView() {
    this.clickOnBackEvent.emit(null);
    this.pageService.backToPrev();
  }

  /**get user status(logged in or not) */
  get userStatus(): boolean {
    return this.userService.userStatus;
  }

  // /**add product to the cart */
  addProductToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  /**delete item from cart when remove button pressed */
  deleteProductFromCart(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }

  /**get users premission */
  get permission(): boolean {
    return this.permissionService.getUserPremission();
  }

  /**send product to edit and redirect to add edit page */
  editProduct() {
    this.pageService.currentPage = 'addEditProduct';
    this.userService.setProductToEdit(this.product); //send the product to edit
  }
}
