import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {OddsService} from '../../services/odds.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-live-menu',
  templateUrl: './live-menu.component.html',
  styleUrls: ['./live-menu.component.css']
})
export class LiveMenuComponent implements OnInit {

  constructor(
    private router:Router,
    private dataService:DataService,
    private oddsService:OddsService
  ) {}

  ngOnInit() {

  }

  navigate(sport, league){
    this.dataService.addSport(sport);
    this.dataService.setLeague(league);
    this.router.navigate(['/live']);
  }

}
