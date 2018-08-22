import { Component, OnInit } from '@angular/core';
import {OddsService} from '../../services/odds.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parlay',
  templateUrl: './parlay.component.html',
  styleUrls: ['./parlay.component.css']
})
export class ParlayComponent implements OnInit {

  odds:any = [];
  testOdds:any = [];
  parlay:any = [];
  sport:number;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private oddsService:OddsService,
    private dataService:DataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.sport = this.dataService.getSports();
    var tmpOdds = this.dataService.getJsonOddsEvents();
    if(tmpOdds.length>0){
      this.setUpActions(tmpOdds, this.sport);
    } else {
      this.getOdds();
    }
  }

  getOdds(){
    console.log('Getting Odds');
    var tempArrId = [];
    var tempArr = [];
    this.oddsService.getOdds().subscribe(data =>{
      for (var i = 0; i < data.length; i++) {
        if(data[i].sport == this.sport && tempArrId.indexOf(data[i].id) < 0){
          tempArrId.push(data[i].id);
          tempArr.push(data[i]);
          tempArr = this.dataService.sortBets(tempArr);
          this.setUpActions(tempArr, this.sport);
        }
      }
    });
  }

  setUpActions(tempActions, sport){
    for (var i = 0; i < tempActions.length; i++){
      if(tempActions[i].sport == sport){
        this.odds.push(tempActions[i]);
      }
    }
  }

  parlayCheckboxClick(event, odd, type){
    if(event.target.checked==true){
      odd.betType = type;
      if(this.duplicateCheck(odd.id)){
        this.flashMessage.show('Only one bet is allowed per game', {cssClass: 'alert-danger', timeout:2000});
        event.target.checked=false;
      } else {
        this.parlay.push(odd);
      }
    } else {
      this.removeParlayItem(odd.id);
    }
    console.log(this.parlay);
  }

  removeParlayItem(oddsId){
    for(var i = 0; i < this.parlay.length; i++){
      if (this.parlay[i].id === oddsId){
        this.parlay.splice(i,1);
      }
    }
  }

  duplicateCheck(oddsId){
    for(var i = 0; i < this.parlay.length; i++){
      if (this.parlay[i].id == oddsId){
        return true;
      }
    }
    return false;
  }

  placeBet(){
    this.authService.getProfile().subscribe(profile => {
      this.dataService.addMultipleBet(this.parlay, profile, 'parlay');
      this.router.navigate(['confirm']);
    },
    err =>{
      this.flashMessage.show('You must be logged in to place a bet.', {cssClass: 'alert-danger'});
      return false;
    });
  }

}
