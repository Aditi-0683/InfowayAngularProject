import { Component, OnInit } from '@angular/core';
// for form
import {User} from '../user'; // interface
import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';
import { UserService} from '../../user.service';
// for toastr
import {NotificationService} from '../../notification.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup
  createAccount()
  {
    this.userService.saveData(this.form.value).subscribe((res)=>{
      this.notification.showSuccess("User registered successfully ","Success");
      this.router.navigateByUrl("loginNew");
    })
    
  }

  constructor(private userService:UserService,private notification:NotificationService,private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      
      first_name:new FormControl(""),
      last_name:new FormControl(""),
      mob:new FormControl(""),
      email:new FormControl(""),
      address:new FormControl(""),
      password:new FormControl(""),
      confirm_pass:new FormControl(""),
    })
  }

}
