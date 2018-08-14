import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  eventsArray:any = [];
  eventOddsArray:any = [];

  constructor(
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    this.eventsArray = [];
    this.getEvents('16', '225');
  }

  getEvents(sportId, leagueId){
    this.oddsService.getUpcomingEvents(sportId, leagueId).then(
      (events) => {
        for(var i = 0; i < events.length; i++){
          this.eventsArray.push(events[i]);
        }
        this.getUpcomingEventOdds(this.eventsArray);
        console.log(this.eventsArray);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUpcomingEventOdds(events){
    for(var i = 0; i < events.length; i++){
      this.oddsService.getUpcomingEventOdds(events[i].id, events[i].homeTeam, events[i].awayTeam, events[i].time, events[i].sport).subscribe(data =>{
        if(data.id != undefined){
          this.eventOddsArray.push(data);
          console.log(this.eventOddsArray);
        }
      });
    }
  }

}
