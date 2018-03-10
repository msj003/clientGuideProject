import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AppSettings} from '../appsettings/appSettings';
import {UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user : User;
  users: User[];


  constructor(private userService : UserService ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers():void{
    this.userService.getAllUsers()
    .subscribe(users=> this.users = users);
  }

}
