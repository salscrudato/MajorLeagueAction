import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

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
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    this.getOdds();
  }

  getOdds(){
    this.oddsService.getMLBOdds().subscribe(data =>{
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        //MLB Odds are sport = 0
        if(data[i].sport == 0){
          this.actions.push(data[i]);
        }
      }
    });
  }

  getUserId(){
  }

  placeBet(action,type){
    this.authService.getProfile().subscribe(profile => {
      this.dataService.addStraightBet(action, type, profile);
      this.router.navigate(['confirm']);
    },
    err =>{
      this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
      console.log(err._body);
      return false;
    });
  }

}
