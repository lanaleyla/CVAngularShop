import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Category, NewProduct, Product } from 'src/model/index';
import { UserService, PageService, DataService } from 'src/app/services/index';

@Component({
  selector: 'app-add-edit-product-form',
  templateUrl: './add-edit-product-form.component.html',
  styleUrls: ['./add-edit-product-form.component.css']
})
export class AddEditProductFormComponent implements OnInit {

  contactForm: FormGroup;
  categories: Category[];
  productToEdit: Product;

  constructor(fb: FormBuilder, private dataService: DataService, private pageService: PageService, private userService: UserService) {
    this.productToEdit = this.userService.product;//initialize with pressed product 
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
    this.categories = this.dataService.getCategories().filter(c => c.title != 'All');
  }

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

  /**add/edit prodcut to products list */
  addEditProduct() {
    let count = this.dataService.getAllProducts().length;
    if (this.dataService.addEditProduct(new NewProduct(this.productToEdit ? this.productToEdit.productId : count + 1, this.contactForm.get('category').value,
      this.contactForm.get('image').value, this.contactForm.get('title').value, this.contactForm.get('price').value, this.contactForm.get('description').value))) {
      alert(`product ${this.contactForm.get('title').value} was added`);
      this.contactForm.reset();
      this.userService.product = null;
    }
  }

  /**remove product to edit from the products list */
  removeProductFromList() {
    if (this.productToEdit) {
      if (this.dataService.removeProduct(this.productToEdit)) {
        alert('product was removed');
      }
      else {
        alert('product was not found');
      }
    }
    this.contactForm.reset();
    this.userService.product = null;
  }

  /**back to previous page */
  back() {
    this.contactForm.reset();
    this.userService.product = null;
    this.pageService.currentPage = this.pageService.previousPage;
  }

}
