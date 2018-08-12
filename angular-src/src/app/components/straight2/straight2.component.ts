import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-straight2',
  templateUrl: './straight2.component.html',
  styleUrls: ['./straight2.component.css']
})
export class Straight2Component implements OnInit {

  eventsArray:any = [];

  constructor(
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    //Add logic to get odds selected from menu, pass this into getOdds
    this.eventsArray = [];
    this.getOdds();
  }

  getOdds(){
    this.getEvents('16', '225');
  }

  getEvents(sportId, leagueId){
    this.oddsService.getUpcomingEvents(sportId, leagueId).then(
      (events) => {
        this.eventsArray[0] = events[0];
        this.eventsArray[1] = events[1];
        this.getUpcomingEventOdds(this.eventsArray);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getUpcomingEventOdds(events){
    for(var i = 0; i < events.length; i++){
      this.oddsService.getUpcomingEventOdds(events[i].id, events[i].homeTeam, events[i].awayTeam, events[i].time, events[i].sport).subscribe(data =>{
        console.log(data.awayTeamML);
        this.eventsArray.push(data);
      });
    }
  }

}
