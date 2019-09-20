import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDirective } from './directives/confirmation.directive';
import { LanguagePipe } from './pipes/language.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SocialLinksComponent } from './social-links/social-links.component';


@NgModule({
  declarations: [ConfirmationDirective, LanguagePipe, ProductDetailsComponent, SocialLinksComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ConfirmationDirective, LanguagePipe, ProductDetailsComponent,SocialLinksComponent],
})

export class SharedModule { }

