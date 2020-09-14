import { Component, OnInit } from '@angular/core';
// importing service
import { ProductService } from '../product.service';
// for toastr
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product:any=[];

  constructor(private productService:ProductService,private notification:NotificationService) { }
  getProductData()
  {
    // getting data using service obj, data comes in res and store in student array
    this.productService.getData().subscribe((res)=>{
      this.product = res
    })
  }

  deleteProduct(id)
  {
    this.productService.deleteData(id).subscribe((res)=>{
      this.notification.showSuccess("Product deleted successfully ","Success");
      this.getProductData(); // for refreshing the product list
      
    })
  }

  ngOnInit(): void {
    this.getProductData();
  }

}
