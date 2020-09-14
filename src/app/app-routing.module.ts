import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ProductManagmentComponent } from './product-managment/product-managment.component';
import { UpdateProductManagmentComponent } from './update-product-managment/update-product-managment.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginNewComponent } from './user/login-new/login-new.component';
import {UpdateUserComponent} from './user/update-user/update-user.component';
import {ViewProductComponent} from './view-product/view-product.component';
import { ViewUser2Component } from './view-user2/view-user2.component';




const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"update/:id",component:UpdateProductManagmentComponent},
  {path:"admin",component:AdminComponent},
  {path:"register",component:RegisterComponent},
  {path:"addproduct",component:ProductManagmentComponent},
  {path:"loginNew",component:LoginNewComponent},
  {path:"userUpdate/:id",component:UpdateUserComponent},
  {path:"admin/viewProduct",component:ViewProductComponent},
  {path:"admin/viewUser2",component:ViewUser2Component}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent,UpdateProductManagmentComponent,AdminComponent]
