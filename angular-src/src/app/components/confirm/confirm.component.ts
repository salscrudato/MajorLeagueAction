import {Component, OnInit} from '@angular/core';
import {BetService} from '../../services/bets.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Bet} from '../../../../../classes/bet';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit{

  bets:any = [];
  betType:string;
  betAmount:number = null;
  odds:number;

  constructor(
    private dataService: DataService,
    private betService: BetService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ){}

  ngOnInit(){
    this.bets = this.dataService.getBet();
    this.betType = this.dataService.getBetType().toUpperCase();
    this.setBetDetailsAndOdds(this.bets);
    this.odds = this.calculateOdds(this.bets);
  }

  clickPlaceBet(){
    var profile = this.dataService.getProfile();
    var winAmount = this.calcWinAmount(this.odds, this.betAmount);
    var confirmedBet = new Bet(profile, this.bets, 'jsonOdds', this.odds, this.betAmount, winAmount, this.betType);
    this.betService.placeBet(confirmedBet).subscribe(data => {
      if(data.success){
        this.router.navigate(['profile']);
      }
    });
  }

  setBetDetailsAndOdds(bets){
    for(var i = 0; i < bets.length; i++){
      bets[i] = this.setBetDescription(bets[i]);
    }
  }

  setBetDescription(bet){
    const awayTeam = bet.awayTeam;
    const homeTeam = bet.homeTeam;
    switch(bet.betType){
      case 'awayTeamRL':
        const awayTeamRL = this.addPlus(bet.awayTeamRL);
        const awayTeamRLOdds = this.addPlus(bet.awayTeamRLOdds);
        bet.betDetails = awayTeam + " Run Line " + awayTeamRL + " " + awayTeamRLOdds;
        bet.odds = awayTeamRLOdds;
        break;
      case 'homeTeamRL':
        const homeTeamRL = this.addPlus(bet.homeTeamRL);
        const homeTeamRLOdds = this.addPlus(bet.homeTeamRLOdds);
        bet.betDetails = homeTeam + " Run Line " + homeTeamRL + " " + homeTeamRLOdds;
        bet.odds = homeTeamRLOdds;
        break;
      case 'awayTeamML':
        const awayTeamML = this.addPlus(bet.awayTeamML);
        bet.betDetails = awayTeam + " Money Line " + awayTeamML;
        bet.odds = awayTeamML;
        break;
      case 'homeTeamML':
        const homeTeamML = this.addPlus(bet.homeTeamML);
        bet.betDetails = homeTeam + " Money Line " + homeTeamML;
        bet.odds = homeTeamML;
        break;
      case 'over':
        bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.totalNumber;
        bet.odds = -110;
        break;
      case 'under':
        bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.totalNumber;
        bet.overUnderOdds=-100;
        bet.odds = -110;
        break;
      default:
        break;
    }
    return bet;
  }

  placeBet(bet){
    this.betService.placeBet(bet).subscribe(data => {
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
        this.router.navigate(['profile']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
        this.router.navigate(['menu']);
      }
    })
  }

  calcWinAmount(odds, betAmount){
    if(odds > 0){
      return this.round((odds/100) * betAmount);
    } else {
      return this.round(betAmount / (odds*-1) * 100);
    }
  }

  round(amount){
    return Math.round(amount);
  }

  addPlus(odd){
    if(odd > 0){
      return "+" + odd;
    } else {
      return odd;
    }
  }

  calculateOdds(bets){
    if(bets.length == 1){
      return parseInt(bets[0].odds);
    } else {
      var oddsArray = [];
      for(var i = 0; i < bets.length; i++){
        var tempOdds = parseInt(bets[i].odds);
        if(tempOdds > 0){
          oddsArray.push((100+tempOdds)/100);
        } else {
          oddsArray.push((100+(tempOdds*-1))/(tempOdds*-1));
        }
      }
      return this.round((oddsArray.reduce(function(a,b){return a*b;}) -1 ) * 100);
    }
  }

}
