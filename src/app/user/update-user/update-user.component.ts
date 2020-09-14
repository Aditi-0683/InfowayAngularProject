import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';
import { UserService} from '../../user.service';
import {ActivatedRoute,Router} from '@angular/router';
// for toastr
import {NotificationService} from '../../notification.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  form: FormGroup
  user :any=[]
  id:number

  updateUser()
  {
    this.userService.updateData(this.id,this.form.value).subscribe((res)=>
    {
      this.notification.showSuccess("User updated successfully ","Success");
      this.router.navigateByUrl("admin");
    })
  }

  constructor(private userService:UserService,private router:Router,
    private activatedRoute:ActivatedRoute,private notification:NotificationService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((param)=>{
      this.id = param["id"]
      this.userService.getDataById(this.id).subscribe((data)=>{
        this.user = data
        this.form = new FormGroup(
          {
            first_name:new FormControl(this.user.first_name),
            last_name: new FormControl(this.user.last_name),
            mob:new FormControl(this.user.mob),
            email:new FormControl(this.user.email),
            address:new FormControl(this.user.address)
            
          }
        )
      })
    })
  }

}
