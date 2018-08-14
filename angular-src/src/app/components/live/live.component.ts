import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  eventsArray:any = [];
  eventOddsArray:any = [];
  sport:any;

  constructor(
    private userService:UserService,
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    this.sport = this.dataService.getSports();
    var league = this.dataService.getLeague();
    this.getLiveEvents(this.sport, league);
  }

  getLiveEvents(sportId, leagueId){
    this.oddsService.getLiveEvents(sportId, leagueId).then(
      (events) => {
        this.eventsArray = events;
        this.getLiveEventOdds(this.eventsArray);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getLiveEventOdds(events){
    for(var i = 0; i < events.length; i++){
      this.oddsService.getLiveEventOdds(events[i].id, events[i].homeTeam, events[i].homeTeamImage, events[i].awayTeam, events[i].awayTeamImage, events[i].sport, events[i].epoch).subscribe(data =>{
        this.eventOddsArray.push(data);
      });
    }
  }

  placeBet(action,type){
    action.betType = type;
    this.authService.getProfile().subscribe(profile => {
      this.dataService.addStraightBet(action, profile, 'straight');
      this.router.navigate(['confirm']);
    },
    err =>{
      this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
      return false;
    });
  }

  placeBetWithIndex(action, type, oddsArray, i){
    var oddsArrNum = oddsArray[i].number;
    var oddsArrOdds = oddsArray[i].odds;
    if(type == 'homeTeamRL'){
      action.homeTeamRL = oddsArrNum;
      action.homeTeamRLOdds = oddsArrOdds;
    } else if(type == 'awayTeamRL'){
      action.awayTeamRL = oddsArrNum;
      action.awayTeamRLOdds = oddsArrOdds;
    } else if(type == 'over'){
      action.over.number = oddsArrNum;
      action.over.odds = oddsArrOdds;
    } else if(type == 'under'){
      action.under.number = oddsArrNum;
      action.under.odds = oddsArrOdds;
    }
    this.placeBet(action, type);
  }

}
