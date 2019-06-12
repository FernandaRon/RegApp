import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getUsers()
  {
    return this.usersList = this.firebase.list('users');
  } 

  insertUser(user: User) 
  {
    this.usersList.push({
      name: user.name,
      username: user.username,
      email: user.email
    });
  }
  updateUser(user: User)
  {
    this.usersList.update(user.$key, {
      name: user.name,
      username: user.username,
      email: user.email
    });
  }

  removeUser($key: string)
  {
    this.usersList.remove($key)
  }

}


