import { Component, OnInit } from '@angular/core';
//service
import { UserService }  from '../../../services/user.service';

import { User } from '../../../models/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
userList: User[];


  constructor(private userService: UserService) { }

  ngOnInit() {
    return this.userService.getUsers()
    .snapshotChanges()
    .subscribe(item => {
      this.userList = [];
      item.forEach(element => {
       let x = element.payload.toJSON();
       x["$key"] = element.key;
       this.userList.push(x as User) 
      });
    })
  }

  onDelete($key: string)
  {
    this.userService.removeUser($key);
  }

}
