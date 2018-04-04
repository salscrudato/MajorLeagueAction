import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;

  constructor(
    private authService:AuthService,
    private userService:UserService
  ){

    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });

  }

  ngOnInit() {
  }

  test(x){
    console.log(x.name);
  }

}
