import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:any;

  constructor(private userService:UserService) {

    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });

  }

  ngOnInit() {

  }

}
