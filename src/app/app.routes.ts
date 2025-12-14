import { Routes } from '@angular/router';
import { BeautyShowcaseComponent } from './beauty-showcase/beauty-showcase.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  // 1. The Home Page (Beauty Showcase)
  { path: '', component: BeautyShowcaseComponent },

  // 2. The Product List
  { path: 'products', component: ProductsComponent },

  // 3. The Single Product Detail
  { path: 'products/:id', component: ProductDetailComponent },
  // 4. The Contacts Page
{ path: 'contacts', component: ContactsComponent }
];