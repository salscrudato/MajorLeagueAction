import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  odds:any;

  constructor(
    private userService:UserService,
    private oddsService:OddsService
  ) {

    //this.userService.getAllUsers().subscribe(data =>{
    //  this.users = data;
    //});

    this.oddsService.getMLBOdds().subscribe(data =>{
      this.odds = data;
    });

  }

  ngOnInit() {
  }

}
