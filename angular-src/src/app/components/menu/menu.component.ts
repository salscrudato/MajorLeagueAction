import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //actions: Array<Action> = [];
  actions: Array<String> = [];

  constructor(
    private userService:UserService,
    private oddsService:OddsService,
    private authService:AuthService
  ) {}

  ngOnInit() {
    this.getUserId();
    this.oddsService.getMLBOdds().subscribe(data =>{
    console.log(data);

    for (var i = 0; i < data.length; i++) {
      /*
      var action = new Action(data[i].ID,
        data[i].Details,
        data[i].MatchTime,
        data[i].Odds,
        data[i].HomeTeam,
        data[i].AwayTeam
      );
      */
      //this.actions.push(action);
      this.actions.push(data[i]);
    }

      //this.odds = data;
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

  comingSoon(){
    alert('Feature Coming Soon!');
  }

}
/*
class Action {
    id: string;
    details: string;
    homeImagePath: string;
    matchDate: string;
    matchTime: string;
    homeTeam: string;
    awayTeam: string;
    homeTeamML: string;
    awayTeamML: string;
    constructor(id: string, details: string, matchTime: string,
      odds: any, homeTeam: string, awayTeam: string) {
        this.id = id;
        this.details = details;
        this.imagePath = '/assets/images/mets.png';
        this.matchDate = matchTime.substr(0,10);
        this.matchTime = matchTime.substr(11,matchTime.length-3);
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        for(var i = 0; i < odds.length; i++){
          if(odds[i].OddType=="Game"){
            this.homeTeamML = odds[i].MoneyLineHome;
            this.awayTeamML = odds[i].MoneyLineAway;
          }
        }
        switch (this.homeTeam){
          case "New York Mets":
            this.homeImagePath = '/assets/images/mets.png';
            break;
          case "Minnesota Twins":
            this.homeImagePath = '/assets/images/mets.png';
            break;
       }
    }

}
*/
