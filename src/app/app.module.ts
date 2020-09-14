import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// for service registration 
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './product.service';
import {UserService} from './user.service';

import { HeadComponent } from './head/head.component';
import { ProductManagmentComponent } from './product-managment/product-managment.component';
import { FooterComponent } from './footer/footer.component';

// import user module
import {UserModule} from './user/user.module';

// for toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewUser2Component } from './view-user2/view-user2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ProductManagmentComponent,
    FooterComponent, 
    routingComponents, ViewProductComponent, ViewUser2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
],
  providers: [ProductService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
