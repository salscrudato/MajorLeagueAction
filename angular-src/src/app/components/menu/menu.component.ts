import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  actions: Array<String> = [];

  constructor(
    private userService:UserService,
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService
  ) {}

  ngOnInit() {
    this.getUserId();
    this.oddsService.getMLBOdds().subscribe(data =>{
    console.log(data);

      for (var i = 0; i < data.length; i++) {
        this.actions.push(data[i]);
      }
    });
  }

  getUserId(){
    this.authService.getProfile().subscribe(profile => {
      console.log(profile.user);
    },
    err =>{
      console.log(err);
      return false;
    });
  }

  comingSoon(action){
    this.dataService.addBets(action);
    this.router.navigate(['confirm']);
  }

}
