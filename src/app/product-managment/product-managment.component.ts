import { Component, OnInit } from '@angular/core';
// for form
import {Product} from './product'; // interface
import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';
import { ProductService} from '../product.service';
// for toastr
import {NotificationService} from '../notification.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-managment',
  templateUrl: './product-managment.component.html',
  styleUrls: ['./product-managment.component.css']
})
export class ProductManagmentComponent implements OnInit {

  form:FormGroup
  register()
  {
    //console.warn(this.form.value);
    this.productservice.saveData(this.form.value).subscribe((res)=>{
      this.notification.showSuccess("Data saved successfully ","Success");
      this.router.navigateByUrl("admin");

      })
    
  }
  
  constructor(private productservice:ProductService,private router:Router,private notification:NotificationService) { }


/*ngOnInit() life-cycle method of Angular OnInit interface to display the imported JSON file in the console. */
  color:string[]=["Black","White","Red","Green"]; 
  ngOnInit(): void {

    this.form = new FormGroup({
      brand_name:new FormControl("Apple"),  // student_name,etc is the name of HTML control
      model_name:new FormControl(""),
      price:new FormControl(""),
      front_cam:new FormControl(""),
      back_cam:new FormControl(""),
      display_size:new FormControl(""),
      internal_storage:new FormControl(""),
      ram:new FormControl(""),
      battery:new FormControl(""),
      os:new FormControl(""),
      chip:new FormControl(""),
      sensor:new FormControl(""),
      color:new FormControl(this.color[0]),
      imagePath:new FormControl("")
      })
  }

}
