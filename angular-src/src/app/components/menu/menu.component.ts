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

  constructor(
    private router:Router,
    private dataService:DataService,
    private oddsService:OddsService
  ) {}

  ngOnInit() {
    this.getOdds();

  }

  navigate(sport){
    this.dataService.addSport(sport);
    this.dataService.setJsonOddsEvents(this.actions);
    this.router.navigate(['/straight']);
  }

  getOdds(){
    var tempArr = [];
    this.oddsService.getOdds().subscribe(data =>{
      for (var i = 0; i < data.length; i++) {
        this.actions.push(data[i]);
        if(data[i].sport != 0 && data[i].sport != 4 && data[i].sport !=8 && data[i].sport !=3){
          tempArr.push(data[i]);
        }
      }
      console.log(tempArr);
    });
  }

}
