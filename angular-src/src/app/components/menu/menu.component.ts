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

  constructor(
    private router:Router,
    private dataService:DataService,
    private oddsService:OddsService
  ) {}

  ngOnInit() {
    this.getOdds();
    this.soccer = [{league:'England Premier League', id:94}, {league:'England League 1', id:587}, {league:'UEFA', id:6542}, {league:'UEFA Europe League Qualifying', id:5823},
    {league:'Italy Serie A', id:199}, {league:'Spain Primera Liga', id:207}, {league:'Spain Copa Federacion', id:429}]

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

  parlay(sport){
    this.dataService.addSport(sport);
    this.dataService.setJsonOddsEvents(this.actions);
    this.router.navigate(['/parlay']);
  }

  getOdds(){
    var tempArr = [];
    this.oddsService.getOdds().subscribe(data =>{
      for (var i = 0; i < data.length; i++) {
        this.actions.push(data[i]);
        if(data[i].sport != 0 && data[i].sport != 4 && data[i].sport !=8 && data[i].sport !=3 && data[i].sport !=21 && data[i].sport !=19 && data[i].sport !=20 && data[i].sport !=24){
          tempArr.push(data[i]);
        }
      }
      console.log(tempArr);
    });
  }

}
