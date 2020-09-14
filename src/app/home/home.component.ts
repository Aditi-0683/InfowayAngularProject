import { Component, OnInit } from '@angular/core';
//import service
import { ProductService} from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product:any=[]

  constructor(private productService:ProductService) { }

  getProductData()
  {
    this.productService.getData().subscribe((res)=>{
      this.product=res;
    })
  }

  ngOnInit(): void {
    this.getProductData()  // call this function to get values on home.html
  }

}
