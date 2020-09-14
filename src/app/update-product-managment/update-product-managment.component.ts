import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';
import { ProductService} from '../product.service';
import {ActivatedRoute,Router} from '@angular/router';
// for toastr
import {NotificationService} from '../notification.service';


@Component({
  selector: 'app-update-product-managment',
  templateUrl: './update-product-managment.component.html',
  styleUrls: ['./update-product-managment.component.css']
})
export class UpdateProductManagmentComponent implements OnInit {

  form: FormGroup
  product :any=[]
  id:number

  update()
  {
    this.productService.updateData(this.id,this.form.value).subscribe((res)=>
    {
      this.notification.showSuccess("Product updated successfully ","Success");
      this.router.navigateByUrl("admin");
    })
  }

  constructor(private productService:ProductService,private router:Router,
    private activatedRoute:ActivatedRoute,private notification:NotificationService) { }
  color:string[]=["Black","White","Red","Green"]; 
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((param)=>{
      this.id = param["id"]
      this.productService.getDataById(this.id).subscribe((data)=>{
        this.product = data
        this.form = new FormGroup(
          {
            brand_name:new FormControl("Apple"),
            model_name:new FormControl(this.product.model_name),  // model_name,etc is the name of HTML control
            price:new FormControl(this.product.price),
            color:new FormControl(this.product.color),
            imagePath:new FormControl(this.product.imagePath),
            os:new FormControl(this.product.os),
            chip:new FormControl(this.product.chip),
            sensor:new FormControl(this.product.sensor)
          }
        )
      })
    })
  }

}
