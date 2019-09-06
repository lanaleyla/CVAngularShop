import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component'
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AddEditProductFormComponent } from './components/add-edit-product-form/add-edit-product-form.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LogedInGuard } from './guards/loged-in.guard';
import { DirtyFormGuard } from './guards/dirty-form.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: CategoriesListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'addEditProduct', component: AddEditProductFormComponent, canDeactivate: [DirtyFormGuard] },
  {
    path: 'cart', component: CartComponent,canActivate: [LogedInGuard], children: [{
      path: 'products/:id', component: ProductDetailsComponent
    }]
  },
  { path: 'product/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [
    DirtyFormGuard,
  ]
})
export class AppRoutingModule { }

//   children: [
//     { path: ':id', component: ProjectDetailsComponent, canActivate: [AdminGuard] },
//   ]

// { path: '**', component: PageNotFoundComponent },