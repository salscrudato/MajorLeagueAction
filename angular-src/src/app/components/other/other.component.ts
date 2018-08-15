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
  sport:number = 0;

  constructor(
    private oddsService:OddsService,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService,
    private flashMessage:FlashMessagesService
  ) {}

  ngOnInit() {
    this.eventsArray = [];
    this.sport = this.dataService.getSports();
    var league = this.dataService.getLeague();
    this.getEvents(this.sport, league);
  }

  getEvents(sportId, leagueId){
    this.oddsService.getUpcomingEvents(sportId, leagueId).then(
      (events) => {
        for(var i = 0; i < events.length; i++){
          this.eventsArray.push(events[i]);
        }
        this.getUpcomingEventOdds(this.eventsArray);

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

  showDetails(action){
    if(action.awayTeamFirstHalf != 0 || action.homeTeamFirstHalf != 0 || action.awayTeamTotalLine != 0 || action.homeTeamTotalLine != 0 || action.awayTeamRL.length > 0 || action.homeTeamRL.length > 0 || action.runInFirst != 0){
      return true;
    } else {
      return false;
    }
  }

}
