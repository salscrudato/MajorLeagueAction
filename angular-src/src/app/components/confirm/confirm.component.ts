import { Component, OnInit } from '@angular/core';
import {BetService} from '../../services/bets.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  userId:string;
  betAmount:number;
  bets:any;
  odds:number;
  description:string;
  oddsId:string;
  betType:string;

  constructor(
    private dataService:DataService,
    private betService:BetService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.bets = this.dataService.getBets();
    this.userId = this.dataService.getProfile().user._id;
    const betType = this.dataService.getBetType();
    this.setBetDetails(betType)
  }

  setBetDetails(betType){

    const awayTeam = this.bets.awayTeam;
    const awayTeamML = this.addPlus(this.bets.awayTeamML);
    const awayTeamRL = this.addPlus(this.bets.awayTeamRL);
    const awayTeamRLOdds = this.addPlus(this.bets.awayTeamRLOdds);
    const homeTeam = this.bets.homeTeam;
    const homeTeamML = this.addPlus(this.bets.homeTeamML);
    const homeTeamRL = this.addPlus(this.bets.homeTeamRL);
    const homeTeamRLOdds = this.addPlus(this.bets.homeTeamRLOdds);
    const totalNumber = this.bets.totalNumber;
    this.oddsId = this.bets.id;

    switch(betType) {
      case 'awayTeamRL':
        this.description = awayTeam + " Run Line " + awayTeamRL + " " + awayTeamRLOdds;
        this.odds = parseInt(awayTeamRLOdds);
        this.betType = 'awayTeamRL';
      break;
      case 'homeTeamRL':
        this.description = homeTeam + " Run Line " + homeTeamRL + " " + homeTeamRLOdds;
        this.odds = parseInt(homeTeamRLOdds);
        this.betType = 'homeTeamRL';
      break;
      case 'awayTeamML':
        this.description = awayTeam + " Money Line " + awayTeamML;
        this.odds = parseInt(awayTeamML);
        this.betType = 'awayTeamML';
      break;
      case 'homeTeamML':
        this.description = homeTeam + " Money Line " + homeTeamML;
        this.odds = parseInt(homeTeamML);
        this.betType = 'homeTeamML';
      break;
      case 'over':
        this.description = awayTeam + " @ " + homeTeam + " Over " + totalNumber;
        this.odds=100;
        this.betType = 'over';
      break;
      default:
      break;
    }
  }

  addPlus(odds){
    if(odds>0){
      return "+"+odds;
    }else{
      return odds;
    }
  }

  placeBet(){
    var winAmountCalc;
    if(this.odds > 0){
      winAmountCalc = this.round((this.odds / 100) * this.betAmount);
    } else {
      winAmountCalc = this.round(this.betAmount / (this.odds * -1) * 100);
    }

    const bet = {
      userId: this.userId,
      oddsId: this.oddsId,
      description: this.description,
      odds: this.odds,
      betAmount: this.betAmount,
      winAmount: winAmountCalc
    }

    this.betService.placeBet(bet).subscribe(data => {
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
        this.router.navigate(['menu']);
      }
    });

  }

  round(amount){
    return Math.round(amount);
  }

}
