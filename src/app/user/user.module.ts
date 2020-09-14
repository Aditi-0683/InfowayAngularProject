import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
//import { AppRoutingModule ,routingComponents } from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginNewComponent } from './login-new/login-new.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [RegisterComponent, LoginNewComponent, UpdateUserComponent, ViewUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[LoginNewComponent,RegisterComponent,UpdateUserComponent,ViewUserComponent]
})
export class UserModule { }
