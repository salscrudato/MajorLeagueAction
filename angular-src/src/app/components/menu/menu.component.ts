import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {OddsService} from '../../services/odds.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  actions:any = [];
  soccer:any = [];
  tennis:any = [];
  showTennis:boolean = false;
  showSoccer:boolean = false;

  constructor(
    private router:Router,
    private dataService:DataService,
    private oddsService:OddsService
  ) {}

  ngOnInit() {
    this.setUpTennis();
    this.getOdds();
    this.soccer = [{league:'England Premier League', id:94}, {league:'England League 1', id:587}, {league:'UEFA', id:6542}, {league:'UEFA Europe League Qualifying', id:5823},
    {league:'Italy Serie A', id:199}, {league:'Spain Primera Liga', id:207}, {league:'Spain Copa Federacion', id:429},
    {league:'Germany Bundesliga 1', id:123}, {league:'France Ligue 1', id:99}, {league:'USA MLS', id:242}, {league:'Elite Cup Friendlies', id:631},
    {league:'Europe Friendlies', id:363}, {league:'Russia Premier League', id:153}, {league:'Republic of Ireland Premier Division', id:398},
    {league:'Copa Sudamericano', id:445}, {league:'Brazil Serie A', id:155}];
  }

  setUpTennis(){
    var tmpArray = [];
    this.oddsService.getUpcomingTennisEvents().subscribe((events) => {
      if(events.length > 0){
        for (var i = 0; i < events.length; i++){
          var tmpEvent = events[i].split('/');
          this.tennis.push({id:tmpEvent[0], league:tmpEvent[1]});
        }
      }
    });
  }

  navigate(sport){
    this.dataService.addSport(sport);
    this.dataService.setJsonOddsEvents(this.actions);
    this.router.navigate(['/straight']);
  }

  moreOdds(sport, league){
    this.dataService.addSport(sport);
    this.dataService.setLeague(league);
    this.router.navigate(['/other']);
  }

  moreOddsParlay(sport, league){
    this.dataService.addSport(sport);
    this.dataService.setLeague(league);
    this.router.navigate(['/parlay']);
  }

  parlay(sport){
    this.dataService.addSport(sport);
    this.dataService.setJsonOddsEvents(this.actions);
    this.router.navigate(['/parlay']);
  }

  teaser(sport, teaser){
    this.dataService.addSport(sport);
    this.dataService.setJsonOddsEvents(this.actions);
    this.dataService.setTeaser(teaser);
    this.router.navigate(['/teaser']);
  }

  getOdds(){
    var tempArr = [];
    this.oddsService.getOdds().subscribe(data =>{
      for (var i = 0; i < data.length; i++) {
        this.actions.push(data[i]);
        this.actions = this.sortEventOdds(this.actions);
        if(data[i].sport != 0 && data[i].sport != 4 && data[i].sport != 24 && data[i].sport != 11 && data[i].sport != 3){
          tempArr.push(data[i]);
        }
      }
      console.log(tempArr);
    });
  }

  props(sport){
    this.dataService.addPropSport(sport);
    this.router.navigate(['/props']);
  }

  sortEventOdds(odds){
    if(odds.length == 1){
      return odds;
    } else {
      for(var i = 0; i < odds.length; i++){
        for(var j = 0; j < odds.length - 1 - i; j++){
          if(odds[j].epoch > odds[j+1].epoch){
            var tmpOdds = odds[j];
            odds[j] = odds[j+1];
            odds[j+1] = tmpOdds;
          }
        }
      }
      return odds;
    }
  }

  clickShowTennis(){
    if(this.showTennis == false){
      this.showTennis = true;
    } else {
      this.showTennis = false;
    }
  }

  clickShowSoccer(){
    if(this.showSoccer == false){
      this.showSoccer = true;
    } else {
      this.showSoccer = false;
    }
  }

}
