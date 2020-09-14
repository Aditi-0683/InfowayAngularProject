import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';
import { UserService} from '../../user.service';
// for toastr
import {NotificationService} from '../../notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})


export class LoginNewComponent implements OnInit {
  loginForm:FormGroup
  i:number=0;
  count:number=0;
  user:any=[];

  getUserData()
  {
    this.userService.getData().subscribe((res)=>{
      this.user=res;
      console.warn(this.user);
    })
  }

  login()
  { 
    if(this.loginForm.value.uname == "admin@admin.com" && this.loginForm.value.pass=="admin")
    {
        this.notification.showSuccess("Admin successfully login","Success");
        this.router.navigateByUrl("admin");    
    }
    else{
      for(this.i=0;this.i<this.user.length;this.i++)
      {
        if(this.loginForm.value.uname == this.user[this.i].email && this.loginForm.value.pass == this.user[this.i].password)
        {
          this.notification.showSuccess("User successfully login","Success");
          this.router.navigateByUrl("/");    
        }
        else{
          this.count++;
          
        }
      }

      if(this.count==this.user.length)
      {
        this.notification.showError("Incorrect Credentials","Error");
      }
    }
    
    
      
    
  

    
  }
  
  constructor(private userService:UserService,private router:Router,private notification:NotificationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      uname:new FormControl(""),
      pass:new FormControl(""),
    })

    this.getUserData();
  }

}
