import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Category, NewProduct, Product } from '../../core/model/index';
import { DataService, UserService } from '../../core/services/index';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit-product-form',
  templateUrl: './add-edit-product-form.component.html',
  styleUrls: ['./add-edit-product-form.component.css']
})
export class AddEditProductFormComponent implements OnInit, OnDestroy {

  contactForm: FormGroup;
  categories: Observable<Category[]>;
  productToEdit: Product;
  sub: Subscription;

  constructor(fb: FormBuilder, private dataService: DataService, private userService: UserService) {

    this.sub = this.userService.productToEditO.subscribe(product => this.productToEdit = product);

    if (this.productToEdit !== undefined && this.productToEdit !== null) {
      this.contactForm = fb.group({
        category: [this.productToEdit.categoryId ? this.productToEdit.categoryId : '', Validators.required],
        image: [this.productToEdit.image ? this.productToEdit.image : '', Validators.required],
        title: [this.productToEdit.title ? this.productToEdit.title : '', Validators.required],
        price: [this.productToEdit.price ? this.productToEdit.price : '', [Validators.required, Validators.min(1)]],
        description: [this.productToEdit.description ? this.productToEdit.description : ''],
      });
    } else {
      this.contactForm = fb.group({
        category: ['', Validators.required],
        image: ['', Validators.required],
        title: ['', Validators.required],
        price: ['', [Validators.required, Validators.min(1)]],
        description: [''],
      });
    }
  }

  ngOnInit() {
    this.categories = this.dataService.categories
      .pipe(
        map(c => c.filter(element => element.title != 'All')));

  }

  /////////////////////////////////////////////////////////getteres and setters///////////////////////////////
  /**for errors */
  get categoryForm(): AbstractControl {
    return this.contactForm.get('category');
  }

  /**for errors */
  get imageForm(): AbstractControl {
    return this.contactForm.get('image');
  }

  /**for errors */
  get priceForm(): AbstractControl {
    return this.contactForm.get('price');
  }

  /**for errors */
  get titleForm(): AbstractControl {
    return this.contactForm.get('title');
  }

  /////////////////////////////////////////////////////////manegment///////////////////////////////

  /**add/edit prodcut to products list */
  addEditProduct() {
    const count = this.dataService.productsArray.length;
    if (this.dataService.addEditProduct(new NewProduct(this.productToEdit ? this.productToEdit.productId : count + 1, this.contactForm.get('category').value,
      this.contactForm.get('image').value, this.contactForm.get('title').value, this.contactForm.get('price').value, this.contactForm.get('description').value))) {
      alert(`product ${this.contactForm.get('title').value} was added`);
      this.contactForm.reset();
      this.userService.product = null;
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.contactForm.dirty) {
      const dirty = confirm('Are you sure?');
      if (dirty === true) {
        this.contactForm.reset();
        this.userService.product = null;
        return true;
      }
      else { return false; }
    }
    this.contactForm.reset();
    this.userService.product = null;
    return true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.userService.product = null;
  }

}

