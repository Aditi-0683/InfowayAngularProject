import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-view-user2',
  templateUrl: './view-user2.component.html',
  styleUrls: ['./view-user2.component.css']
})
export class ViewUser2Component implements OnInit {
  user:any=[];

  getUserData()
  {
    this.userService.getData().subscribe((res1)=>{
    this.user = res1
    })
  }

  deleteUser(id)
  {
    this.userService.deleteData(id).subscribe((res)=>{
      this.notification.showSuccess("User deleted successfully ","Success");
      this.getUserData(); // for refreshing the user list
      
    })
  }

  constructor(private userService:UserService,private notification:NotificationService) { }

  ngOnInit(): void {
    this.getUserData();
  }

}
