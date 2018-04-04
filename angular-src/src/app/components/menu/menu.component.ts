import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  users:any;

  constructor(
    private userService:UserService
  ) {

    //could replace with getting menu items
    this.userService.getAllUsers().subscribe(data =>{
      this.users = data;
    });

  }

  ngOnInit() {
  }

}
