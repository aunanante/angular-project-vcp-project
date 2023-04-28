import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { AddCommerceComponent } from './components/commerces/add-commerce/add-commerce.component';
import { CommercesListComponent } from './components/commerces/commerces-list/commerces-list.component';
import { EditCommerceComponent } from './components/commerces/edit-commerce/edit-commerce.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { AddVilleComponent } from './components/villes/add-ville/add-ville.component';
import { VillesListComponent } from './components/villes/villes-list/villes-list.component';
import { EditVilleComponent } from './components/villes/edit-ville/edit-ville.component';
import { LoginComponent } from './authcomponent/login/login.component';
import { RegisterComponent } from './authcomponent/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ExpirationDateComponent } from './components/expiration-date/expiration-date.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoriesListComponent,
    EditCategoryComponent,
    AddCommerceComponent,
    CommercesListComponent,
    EditCommerceComponent,
    AddProductComponent,
    ProductsListComponent,
    EditProductComponent,
    AddVilleComponent,
    VillesListComponent,
    EditVilleComponent,
    LoginComponent,
    RegisterComponent,
    ExpirationDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
