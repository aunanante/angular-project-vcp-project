import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authcomponent/login/login.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { AddCommerceComponent } from './components/commerces/add-commerce/add-commerce.component';
import { CommercesListComponent } from './components/commerces/commerces-list/commerces-list.component';
import { EditCommerceComponent } from './components/commerces/edit-commerce/edit-commerce.component';
import { ExpirationDateComponent } from './components/expiration-date/expiration-date.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { AddVilleComponent } from './components/villes/add-ville/add-ville.component';
import { EditVilleComponent } from './components/villes/edit-ville/edit-ville.component';
import { VillesListComponent } from './components/villes/villes-list/villes-list.component';
import { RegisterComponent } from './authcomponent/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'add-ville', component: AddVilleComponent },
  { path: 'edit-ville/:id', component: EditVilleComponent },
  { path: 'villes-list', component: VillesListComponent },

  { path: 'add-commerce', component: AddCommerceComponent },
  { path: 'edit-commerce/:id', component: EditCommerceComponent },
  { path: 'commerces-list', component: CommercesListComponent },

  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-category/:id', component: EditCategoryComponent },
  { path: 'categories-list', component: CategoriesListComponent },

  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'expiration-date', component: ExpirationDateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
