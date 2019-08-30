import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddEditProductFormComponent } from './add-edit-product-form/add-edit-product-form.component';
import { LanguagePipe } from './language.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    SideBarComponent,
    ProductListComponent,
    ProductComponent,
    CategoriesListComponent,
    SocialLinksComponent,
    ProductDetailsComponent,
    CartComponent,
    LoginFormComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AddEditProductFormComponent,
    LanguagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
