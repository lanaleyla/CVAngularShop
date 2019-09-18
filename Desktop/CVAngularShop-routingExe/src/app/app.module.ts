import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddEditProductFormComponent } from './components/add-edit-product-form/add-edit-product-form.component';
import { LanguagePipe } from './pipes/language.pipe';
import { ConfirmationDirective } from './directives/confirmation.directive';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from'@angular/common/http';
import { LogInterceptor } from './logInterceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';


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
    ConfirmationDirective,
    CartItemComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
