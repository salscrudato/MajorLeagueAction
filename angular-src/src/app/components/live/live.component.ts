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

  constructor(
    private userService:UserService,
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    //this.getLiveEvents('16', '225');
    this.getLiveEvents('16', '225');
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
      this.oddsService.getLiveEventOdds(events[i].id, events[i].homeTeam, events[i].homeTeamImage, events[i].awayTeam, events[i].awayTeamImage).subscribe(data =>{
        this.eventOddsArray.push(data);
        console.log(this.eventOddsArray);
      });
    }
  }

  placeBet(){
    
  }

}
